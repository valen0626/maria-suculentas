import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carrusel = () => {
    return (
        <Carousel className='carrusel'>
            <div >
                <img src="./public/pl1.jpeg" alt="Imagenu" />
            </div>
            <div>
                <img src="./public/pl3.jpg" alt="Imagen" />
            </div>
            <div>
                <img src="./public/pl4.jpg" alt="Imagen" />
            </div>
            <div>
                <img src="./public/pl5.jpg" alt="Imagen" />
            </div>
            
                
        </Carousel>
    );
};

export default Carrusel;
