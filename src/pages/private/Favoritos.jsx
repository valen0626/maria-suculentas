import styles from './Favoritos.module.css';
import { useContext} from 'react';
import { CarroContexto } from '../../components/carro/CarroContexto';

function Favoritos() {
    const { favoritos, eliminarFavorito, agregarAlCarro } = useContext(CarroContexto);

    return (
    <main>
        <h1 className='text-base/10 font-semibold text-gray-900'>Árticulos guardados</h1>
        <span>{favoritos.length} árticulos</span>
        <section className={styles.section}>
            {favoritos.map((favorito)=>(
               <div key={favorito.nombre} className={styles.favorito}>
                    <img src={favorito.imagen} alt={favorito.nombre} />
                    <div>
                        <span>{favorito.nombre}</span>
                        <span>${favorito.precio}</span>
                        <button className='primary-button' onClick={()=> agregarAlCarro(favorito, 1)}>Agregar a la cesta</button>
                        <span onClick={() => eliminarFavorito(favorito)} className={styles.eliminar}>Eliminar</span>
                    </div>
                </div> 
            ))}
        </section>
    </main>
    )
}

export default Favoritos;