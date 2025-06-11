import { collection, doc, getDoc, query, updateDoc, where } from "firebase/firestore"
import { db, storage } from "./firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const coleccion = "clientes"
const rutaFoto = "perfil-imagenes"

export const editarPerfilSoloDatos = async (formCliente, mostrarNotificacion) => {
    try {
        const perfilRef = doc(db, coleccion, formCliente.idCliente)

        await updateDoc(perfilRef, {
            Nombres: formCliente.nombres,
            Apellidos: formCliente.apellidos,
            Celular: formCliente.celular,
            FechaNacimiento: formCliente.fechaNacimiento,
        })

        mostrarNotificacion("exito", "Datos actualizados exitosamente")
    } catch (error) {
        mostrarNotificacion("error", "Error actualizando la información")
    }

}

export const editarPerfilSinFoto = async (url, idCliente) => {
    const perfilRef = doc(db, coleccion, idCliente)
    await updateDoc(perfilRef, {
        FotoUrl: url === undefined ? null : url,
    })
}

export const editarPerfilConFoto = (foto, idCliente) => {
    const fechaAhora = Date.now()
    const rutaCompleta = foto.name + fechaAhora + foto.lastModified + foto.size
    const imageRef = ref(storage, `${rutaFoto}/${rutaCompleta}`)
    uploadBytes(imageRef, foto)
        .then((snapshop) => {
            getDownloadURL(snapshop.ref).then((url) => {
                editarPerfilSinFoto(url, idCliente)
            })
        }).catch((error) => {
            console.log("Error al subir imagen", error);
        })
}

export const getDirecciones = async (idCliente) => {
  try {
    const docRef = doc(db, coleccion, idCliente);
    const usuario = await getDoc(docRef);
    
    if (usuario.exists()) {
      return usuario.data();
    } else {
      return { mensaje: "No se encontró el usuario" };
    }
  } catch (error) {
    return {
      error: "Error al obtener usuario",
      message: error.message
    };
  }
};

export const insertarDireccion = () => {

}