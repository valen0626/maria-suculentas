
const SelectorCantidad = ({ cantidad, setCantidad }) => {
    const aumentar = () => setCantidad(prev => prev + 1);
    const disminuir = () => {
        if (cantidad > 1) setCantidad(prev => prev - 1);
    };

    return (
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-fit text-sm">
            <button onClick={disminuir} className="w-7 h-7 text-gray-700 hover:bg-gray-100">−</button>
            <input
            type="number"
            min="1"
            value={cantidad}
            onChange={e => {
                const value = parseInt(e.target.value, 10);
                if (!isNaN(value) && value > 0) setCantidad(value);
            }}
            className="w-5 text-center focus:outline-none appearance-none no-spinner"/>
            <button onClick={aumentar} className="w-7 h-7 text-gray-700 hover:bg-gray-100">+</button>
        </div>
    )
}

export default SelectorCantidad;