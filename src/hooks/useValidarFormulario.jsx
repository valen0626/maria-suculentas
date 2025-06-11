import { useState } from "react";

export const useValidarFormulario = (camposIniciales = {}, camposRequeridos = []) => {
  const [formulario, setFormulario] = useState(camposIniciales);
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({ ...prev, [name]: value }));
    setErrores((prev) => ({ ...prev, [name]: undefined }));
  };

  const validarCampos = () => {
    const nuevosErrores = {};
    camposRequeridos.forEach((campo) => {
      if (!formulario[campo]?.trim()) {
        nuevosErrores[campo] = "Este campo es obligatorio";
      }
    });
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const setearFormulario = (valores) => {
    setFormulario((prev) => ({ ...prev, ...valores }));
  };

  return {
    formulario,
    errores,
    handleChange,
    validarCampos,
    setFormulario: setearFormulario,
  };
};
