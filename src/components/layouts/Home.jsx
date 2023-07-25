import Header from "../helpers/Header"
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
const Home = () => {
  return (
    <main>
     <Header/>
    <section className="imagen">
    <img src="/fondo inicio.jpg" alt="imagen de suculentas" className="imagenHeader"/>
    <h1 >Suculentas que alegran y sanan</h1>
    <p>Te ofrecemos la mejor selección de plantas suculentas</p>
    <div>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=PD17p7KWZb4&ab_channel=Ecolog%C3%ADaVerde'
          className='react-player' 
          controls/>
      </div>
      <footer>
        
      </footer>
    </section>
    
</main>
  )
}

export default Home