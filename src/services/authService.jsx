import { applyActionCode, checkActionCode, confirmPasswordReset, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, verifyPasswordResetCode } from "firebase/auth"
import { auth, db } from "./firebase"
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore"

export const registrarCliente = async (formRegistrar, userId) => {
    try {
        await setDoc(doc(db, "clientes", userId), {
            Nombres: formRegistrar.nombres,
            Apellidos: formRegistrar.apellidos,
            Correo: formRegistrar.correo,
            Confirmacion: false,
            Rol: "cliente"
        })
    } catch (error) {
        console.log("error al registrar usuario", error);
    }
}

export const registrarClienteAuth = async (formRegistrar) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formRegistrar.correo,
      formRegistrar.contraseña
    );

    const user = userCredential.user;
    const userId = user.uid;

    await sendEmailVerification(user);
    await registrarCliente(formRegistrar, userId);

    return "Correcto";
  } catch (error) {
    if (error.code === "auth/email-already-in-use") return "Repetido";
    if (error.code === "auth/weak-password") return "Contrasena";

    console.error("Error desconocido en Firebase:", error.code, error.message);
    return "Error";
  }
};



export const verificarCuentaCorreo = async (actionCode) => {
    var restoredEmail = null
    return await checkActionCode(auth, actionCode).then(async (info) => {
        restoredEmail = info["data"]["email"]
        await applyActionCode(auth, actionCode)
        return restoredEmail
    }).catch((error) => {
        if (error.code === "auth/invalid-action-code") {
            return "expirado"
        } else {
            return "error"
        }
    })
}

export const ingresarClienteAuth = async (formIngresar) => {
    return await signInWithEmailAndPassword(auth, formIngresar.correo, formIngresar.contraseña).then((userCredential) => {
        const correoVerificado = userCredential.user.emailVerified
        const usuario = {
            idUsuario: userCredential.user.uid,
            token: userCredential.user.accessToken,
        }
        if (correoVerificado) {
            return usuario
        } else {
            return "noVerificado"
        }
    }).catch((error) => {
        if (error.code === "auth/wrong-password") {
            return "contrasenaIncorrecta"
        } else {
            return "error"
        }
    })
}

export const clienteEditarToken = async (idUsuario, token) => {
    await updateDoc(doc(db, "clientes", idUsuario), { IdToken: token })
}
export const traerUnCliente = async (usuarioVerificado) => {
    const idUsuario = usuarioVerificado.idUsuario
    const token = usuarioVerificado.token
    const idTokenLS = localStorage.getItem("IdToken")

    const clienteRef = doc(db, "clientes", idUsuario)
    const docCliente = await getDoc(clienteRef)
    console.log(clienteRef, docCliente)
    if (docCliente.exists()) {
        if (idTokenLS && idTokenLS === docCliente.data().IdToken) {
            return { IdCliente: idUsuario, ...docCliente.data() }
        } else {
            clienteEditarToken(idUsuario, token)
            return {
                IdCliente: idUsuario,
                IdToken: token,
                Correo: docCliente.data().Correo,
                Nombres: docCliente.data().Nombres,
                Apellidos: docCliente.data().Apellidos,
                FechaNacimiento: docCliente.data().FechaNacimiento,
                Celular: docCliente.data().Celular,
                FotoUrl: docCliente.data().FotoUrl,
                Confirmacion: docCliente.data().Confirmacion,
                Rol: docCliente.data().Rol,
            }
        }
    } else {
        console.log("No existe el documento");
    }
}

export const recuperarContraseña = async (form) => {
    return await sendPasswordResetEmail(auth, form)
        .then(() => {
            return "correcto"
        }).catch(() => {
            return "error"
        })
}

export const actualizarCuentaContraseña = async (actionCode, formContraseña) => {
    return await verifyPasswordResetCode(auth, actionCode).then(() => {
        return confirmPasswordReset(auth, actionCode, formContraseña).then(() => {
            return "cambiado"
        }).catch(() => {
            return "no"
        })
    }).catch(() => {
        return "error"
    })
}