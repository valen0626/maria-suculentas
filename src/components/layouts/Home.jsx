import Header from "../helpers/Header"

const Home = () => {
  return (
    <main>
        <Header/>
        <section className="imagen">
        <img src="/suculentas-sobre-fondo-blanco_916191-12859.jpg" alt="imagen de suculentas" className="imagenHeader"/>
        <h1>Suculentas que alegran y sanan</h1>
        <p>Te ofrecemos la mejor selección de plantas suculentas</p>
        <input type="button" value="Ver colección" />
        </section>
        
        <section>
            <h1>Maria suculentas</h1>
        </section>
    </main>
  )
}

export default Home