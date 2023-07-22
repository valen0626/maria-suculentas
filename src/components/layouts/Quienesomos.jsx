import React from 'react'
import Carrusel from './Carrusel'
import Header from '../helpers/Header'

const Quienesomos = () => {
    return (
        <section>
            <Header />

            <h1 className='titulomaria'>MARIA SUCULENTAS</h1>
            <p className='parrafosomos'>Somos un vivero de plantas vivas del tipo suculentas y nos enfocamos en darle un valor agregado a nuestra producción, para que nuestros productos tengan una clara diferenciación y valor agregado en el mercado, para poder satisfacer las necesidades y expectativas de nuestros clientes. </p>



            <Carrusel />
        </section>
    )
}

export default Quienesomos