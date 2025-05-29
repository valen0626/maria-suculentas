import ReactPlayer from 'react-player'
import Carruselinicio from '../../components/Carrusel/Carruselinicio'
import Footer from '../../components/Footer/Footer'
import './inicio.css'

const Inicio = () => {
  return (
    <main>
      <img
        src="/img/fondo inicio.jpg"
        alt="imagen de suculentas"
        className="imagenHeader"
      />
      <div className='mensaje'>
        <h1>Suculentas que alegran y sanan</h1>
        <p>Te ofrecemos la mejor selección de plantas suculentas</p>
      </div>
  
     <section className="seccion-video">
        <div className="react-player">
          <ReactPlayer url="https://youtu.be/oEb7imdMdHc" playing loop muted />
          <img src="/img/sucu2.png" alt="" className="sucu2" />
        </div>
        
          
        <section className="cuidados">
          <p >
            &quot;Los cuidados de las suculentas se diferencian de muchas
            otras plantas porque no necesitan un cuidado constante y diario como
            la mayoría de ellas. La idea de que las suculentas se cuidan solas
            viene del hecho de que no necesitan un riego diario, sino que al
            estar compuestas básicamente de una gran cantidad de agua almacenada
            en sus hojas, tallos y raíces, pueden llegar a estar bastante tiempo
            sin riego.&quot;
          </p>
        </section>    
      </section> 
    
    <section className='w-full mx-auto'>
      <h1 className="mb-4 text-3xl font-medium text-center text-gray-700">Nuestros productos hechos 100% naturales</h1>
      <div className="w-[600px] h-[400px] mx-auto">
        <Carruselinicio/>
      </div>  
    </section>
    <Footer/>
  </main>
  )
}

export default Inicio