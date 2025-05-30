import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const Carruselinicio = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={3000}
      bullets={true}
      organicArrows={true}
      className="w-full h-[400px]"
    >
      <div><img src='/home-Img/Gomitas-cannabis.jpg' alt='aceite' className='w-80' /></div>
      <div><img src='/home-Img/aceite-cannabis.jpg' alt='aceite' className='w-80' /></div>
      <div><img src='/home-Img/publicidad-suculenta.jpg' alt='aceite' className='w-80' /></div>
      <div><img src='/home-Img/shampoo-cannabis.jpg' alt='aceite' className='w-80' /></div>
      <div><img src='/home-Img/pomada-cannabis.jpg' alt='aceite' className='w-80' /></div>
      <div><img src='/home-Img/publicidad-aceite2.jpg' alt='aceite' className='w-80' /></div>
      <div><img src='/home-Img/publicidad-crema.jpg' alt='aceite' className='w-80' /></div>
      <div><img src='/home-Img/soda-cannabis.jpg' alt='aceite' className='w-80' /></div>
      <div><img src='/home-Img/publicidad-aceite3.jpg' alt='aceite' className='w-80' /></div>
    </AutoplaySlider>
  )
}

export default Carruselinicio