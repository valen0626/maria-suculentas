import React from 'react'
import Carrusel from './Carrusel'
import Header from '../helpers/Header'
import Footer from './Footer'



const Quienesomos = () => {
    return (
        <section>
            <Header />
            <section className='parrafos'>
                <h1 className='parrafosh1'>MARIA SUCULENTAS</h1>
                <p>Somos un vivero de plantas vivas del tipo suculentas y nos enfocamos en darle un valor agregado a nuestra producción, para que nuestros productos tengan una clara diferenciación y valor agregado en el mercado, para poder satisfacer las necesidades y expectativas de nuestros clientes. </p>
                <p>La prioridad de nuestra empresa es obtener la máxima calidad. lo que se consigue con instalaciones modernas y eficaces. Con el secado por aire inducido, se puede controlar las variables del tratamiento y en el lapso de unas horas es posible obtener un producto homogéneo y de excelente calidad comercial.</p>
                <p>Nuestros aceites esenciales los obtenemos por arrastre de vapor. Hacemos pasar una corriente de vapor de agua a través de la planta a procesar, previamente introducida en el vaso destilador de un alambique de acero inoxidable, lo que volatiliza y arrastra las moléculas aromáticas de ésta.</p>
                <Carrusel />
               
            </section>

        </section>
    )
}

export default Quienesomos