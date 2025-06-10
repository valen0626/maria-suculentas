import { doc, updateDoc } from "firebase/firestore"
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