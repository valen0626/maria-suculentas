import { useContext } from 'react';
import { CarroContexto } from '../../context/CarroContexto';
import FavoritoCard from "../../components/FavoritoCard";

function Favoritos() {
    const { favoritos, eliminarFavorito, agregarAlCarro } = useContext(CarroContexto);

    return (
        <main className='py-4 lg:mx-16 mx-7'>
            <h1 className="text-xl font-semibold text-gray-900 mb-2">Árticulos guardados</h1>
            {favoritos.length > 0 ? (
                <span>{favoritos.length} árticulos</span>
            ):(
                <span>No hay árticulos guardados</span>
            )}
            <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 m-3">
                {favoritos.map(favorito => (
                    <FavoritoCard
                        key={favorito.id}
                        favorito={favorito}
                        agregarAlCarro={agregarAlCarro}
                        eliminarFavorito={eliminarFavorito}
                    />
                ))}
            </section>
        </main>
    )
}

export default Favoritos;