import Header from "../helpers/Header"

const Productos = () => {
  return (
    <section>
        <Header/>
        <section className="headerProductos">
        </section>
        
        <section className="listaProductos">
            <section className="producto">
              <img src="/planta.jpg" alt="" />
              <h4>Cactus</h4>
              <input type="button" value="Ver" />
              <input type="button" value="Comprar" />
            </section>
            <section className="producto">
              <img src="/planta.jpg" alt="" />
              <h4>Cactus</h4>
              <input type="button" value="Ver" />
              <input type="button" value="Comprar" />
            </section>
            <section className="producto">
              <img src="/planta.jpg" alt="" />
              <h4>Cactus</h4>
              <input type="button" value="Ver" />
              <input type="button" value="Comprar" />
            </section>
            <section className="producto">
              <img src="/planta.jpg" alt="" />
              <h4>Cactus</h4>
              <input type="button" value="Ver" />
              <input type="button" value="Comprar" />
            </section>
            <section className="producto">
              <img src="/planta.jpg" alt="" />
              <h4>Cactus</h4>
              <input type="button" value="Ver" />
              <input type="button" value="Comprar" />
            </section>
        </section>
    </section>
  )
}

export default Productos