import Header from "../helpers/Header"
import Logo from "./Logo"

const Home = () => {
  return (
    <main>
     <Header/>
    
    <section className="imagen">
    <Logo/>
   
    <img src="/fondo inicio.jpg" alt="imagen de suculentas" className="imagenHeader"/>
    <h1 >Suculentas que alegran y sanan</h1>
    <p>Te ofrecemos la mejor selección de plantas suculentas</p>
  
    </section>
    
</main>
  )
}

export default Home