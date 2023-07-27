import Header from "../helpers/Header"
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Footer from "./Footer"
import Carruselinicio from './Carruselinicio'

const Home = () => {
  return (
    <main>
    <Header />
    <section className="imagen">
      <img
        src="./public/img/fondo inicio.jpg"
        alt="imagen de suculentas"
        className="imagenHeader"
      />
      <h1>Suculentas que alegran y sanan</h1>
      <p>Te ofrecemos la mejor selección de plantas suculentas</p>
  
     <section className="secciones">
      <div className="react-player">
        <ReactPlayer url="https://youtu.be/oEb7imdMdHc" playing loop muted />
        <img src="./public/img/sucu.png" alt="" className="sucu" />
        <img src="./public/img/sucu2.png" alt="" className="sucu2" />
      </div>
      
        
        <section className="cuidados">
        <p >
          "Cuidados de las suculentas se diferencian de muchas
          otras plantas porque no necesitan un cuidado constante y diario como
          la mayoría de ellas. La idea de que las suculentas se cuidan solas
          viene del hecho de que no necesitan un riego diario, sino que al
          estar compuestas básicamente de una gran cantidad de agua almacenada
          en sus hojas, tallos y raíces, pueden llegar a estar bastante tiempo
          sin riego. "
        </p>
        </section>
        
        
  </section> 
      
      
    </section>
    <h1 className="nuestros">NUESTROS PRODUCTOS HECHOS 100% NATURALES</h1>
      <Carruselinicio/>
    <Footer/>
  </main>
  )
}

export default Home