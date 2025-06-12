import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { registrarClienteAuth } from "../../services/authService";

const initFormRegistrar = {
    nombres: "",
    apellidos: "",
    correo: "",
    contraseña: "",
}
const Registrar = (props) => {
    const navigate = useNavigate()
    const [formRegistrar, setFormRegistrar] = useState(initFormRegistrar)
    const handleChange = ({ target: { name, value } }) => {
        setFormRegistrar({ ...formRegistrar, [name]: value })
    }
    const [message, setMessage] = useState(null);
    const [errors, setErrors] = useState({});

    const validate = () => {
  const newErrors = {};

  if (!formRegistrar.correo) {
    newErrors.correo = 'El correo es obligatorio';
  } else if (!/\S+@\S+\.\S+/.test(formRegistrar.correo)) {
    newErrors.correo = 'Correo no válido';
  }

  if (!formRegistrar.contraseña) {
    newErrors.password = 'La contraseña es obligatoria';
  } else if (formRegistrar.contraseña.length < 7) {
    newErrors.password = 'Mínimo 7 caracteres';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const registrarUser = async (e) => {
  e.preventDefault();
  setMessage(null);

  if (!validate()) return;

  try {
    const res = await registrarClienteAuth(formRegistrar);
  
    if (res === "Correcto") {
      setMessage({
        type: "success",
        text: "Registrado correctamente, verificar correo",
      });
      setFormRegistrar(initFormRegistrar);
    } else if (res === "Repetido") {    
      setMessage({ type: "error", text: "Correo existente" });
    } else if (res === "Contrasena") {
      setMessage({
        type: "error",
        text: "La contraseña debe ser mayor a seis dígitos",
      });
    } else {
      setMessage({
        type: "error",
        text: "Error registrando el usuario",
      });
    }
  } catch {
    setMessage({
      type: "error",
      text: "Ocurrió un error inesperado. Intenta nuevamente.",
    });
  }
};



    return (
        <section>
            <section className="max-w-md mx-auto">
                <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900">Crea una cuenta</h2>
                    </div>
                    {message && (
                        <div
                            className={`p-2 mt-4 rounded text-sm ${message.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                                }`}
                        >
                            {message.text}
                        </div>
                    )}
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">


                        <form onSubmit={registrarUser} className="space-y-6" method="POST">
                            <div>
                                <label htmlFor="nombres" className="block text-sm/6 font-medium text-gray-900">Nombre</label>
                                <div className='mt-2'>
                                    <input type="text"
                                        name="nombres"
                                        placeholder="Ingrese su nombre"
                                        onChange={handleChange}
                                        required
                                        autoComplete='given-name'
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="apellidos" className="block text-sm/6 font-medium text-gray-900">Apellidos</label>
                                <div className='mt-2'>
                                    <input type="text"
                                        name="apellidos"
                                        placeholder="Ingrese sus apellidos"
                                        onChange={handleChange}
                                        required
                                        autoComplete='family-name'
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="correo" className="block text-sm/6 font-medium text-gray-900">Correo</label>
                                {errors.correo && <p className="text-red-500 text-sm mt-1">{errors.correo}</p>}
                                <div className='mt-2'>
                                    <input type="email"
                                        name="correo"
                                        placeholder="Ingrese su correo"
                                        onChange={handleChange}
                                        required
                                        autoComplete='email'
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="contraseña" className="block text-sm/6 font-medium text-gray-900">Contraseña</label>
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                                <div className='mt-2'>
                                    <input type="password"
                                        name="contraseña"
                                        placeholder="Cree una contraseña"
                                        onChange={handleChange}
                                        required
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Crear</button>
                            </div>
                        </form>
                        <p className="mt-10 text-center text-sm/6 text-gray-500">
                            ¿Ya tienes una cuenta?
                            <a href="#" className="font-semibold text-green-600 hover:text-green-500"><Link to={"/ingresar"}>Ingresar</Link></a>
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Registrar