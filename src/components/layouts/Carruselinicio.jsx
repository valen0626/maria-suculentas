import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Carruselinicio = () => {
  return (
    <AwesomeSlider className='fotos'>
    <div>
        <img src='./public/img/aceite.jpg' alt='aceite'className='imagenescarrusel'/>
    </div>
    <div>
    <img src='./public/img/crema.jpg' alt='aceite' className='imagenescarrusel'/>
    </div>
    <div>
    <img src='./public/img/gomas.jpg' alt='aceite'className='imagenescarrusel'/>
    </div>
    <div>
    <img src='./public/img/Gomitas.jpg' alt='aceite'className='imagenescarrusel'/>
    </div>
    <div>
    <img src='./public/img/humectante.jpg' alt='aceite'className='imagenescarrusel'/>
    </div>
    <div>
    <img src='./public/img/pomada.jpg' alt='aceite'className='imagenescarrusel'/>
    </div>
    <div>
    <img src='./public/img/publicidad1.jpg' alt='aceite'className='imagenescarrusel'/>
    </div>
    <div>
    <img src='./public/img/shampoo.jpg' alt='aceite'className='imagenescarrusel'/>
    </div>
    <div>
    <img src='./public/img/soda.jpg' alt='aceite'className='imagenescarrusel'/>
    </div>
   
  </AwesomeSlider>
  )
}

export default Carruselinicio