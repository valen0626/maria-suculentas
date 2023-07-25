import Header from "../helpers/Header"
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
const Home = () => {
  return (
    <main>
    <Header />
    <section className="imagen">
      <img
        src="/fondo inicio.jpg"
        alt="imagen de suculentas"
        className="imagenHeader"
      />
      <h1>Suculentas que alegran y sanan</h1>
      <p>Te ofrecemos la mejor selección de plantas suculentas</p>
      <div className="react-player">
        <ReactPlayer url="https://youtu.be/oEb7imdMdHc" playing loop muted />
      </div>
      <section>
        <img src="./public/sucu.png" alt="" className="sucu" />
        <img src="./public/sucu2.png" alt="" className="sucu2" />
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
  </main>
  )
}

export default Home