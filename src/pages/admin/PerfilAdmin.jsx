import { editarPerfilConFoto, editarPerfilSinFoto } from '../../services/UsuarioService';

function PerfilAdmin() {
    const [foto, setFoto] = useState(undefined)
    const [fotoVista, setFotoVista] = useState(undefined)
    const [fotoFirebase, setFotoFirebase] = useState("")

    useEffect(() => {
        if (!foto) {
            return
        }
        const fotoCargada = new FileReader()
        fotoCargada.onload = () => {
            setFotoVista(fotoCargada.result)
        }
        fotoCargada.readAsDataURL(foto)
    }, [foto])

    function cambiarImagen(e) {
        let fotoSeleccionado
        if (e.target.files && e.target.files.length === 1) {
            fotoSeleccionado = e.target.files[0]
            setFoto(fotoSeleccionado)
        }
        imagenRef.current.value = ""
    }

    function cambiarImagenSubir() {
        imagenRef.current.click()
    }

    function eliminarImagen() {
        setFoto(undefined)
        if (fotoFirebase) {
            setFotoVista(fotoFirebase)
        } else {
            setFotoVista(undefined)
        }
        imagenRef.current.value = ""
    }

    const guardarFoto = (e) => {
        e.preventDefault()
        const userId = usuario.IdCliente
        if (foto === undefined) {
            editarPerfilSinFoto(fotoVista, userId)
            setFoto(undefined)
            setFotoVista(fotoVista)
        } else {
            editarPerfilConFoto(foto, userId)
            setFoto(undefined)
            setFotoVista(fotoVista)
        }
    }
    return (
        <>
        </>
    )
}

export default PerfilAdmin