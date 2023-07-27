import Header from "../../helpers/Header"

const FormularioCompra = () => {
  return (
    <section>
        <Header/>
        <section className="headerProductos"></section>
         <section className="seccion">
          
            <section className="container_carro">
                
                <article className="contactForm">

                    <h2>Orden de compra</h2>
                    <article className="formularioBox">
                        <article className="inputBox w50">
                            <input type="text" required />
                            <span>Nombre</span>
                        </article>
                        <article className="inputBox w50">
                            <input type="text" required />
                            <span>Apellido</span>
                        </article>
                        <article className="inputBox w50">
                            <input type="email" required />
                            <span>Correo</span>
                        </article>
                        <article className="inputBox w50">
                            <input type="text" required />
                            <span>Teléfono</span>
                        </article>
                        <article className="inputBox w50">
                            <input type="text" required />
                            <span>Ciudad</span>
                        </article>
                        <article className="inputBox w50">
                            <input type="text" required />
                            <span>Dirección</span>
                        </article>
                        <article className="inputBox w100">
                            <textarea required></textarea>
                            <span>Detalles de orden</span>
                        </article>
                        <article className="inputBox w100">
                            <input type="submit" value={"Enviar"}/>
                        </article>
                        <article className="contactInfo">
                    <ul className="sci">
                        <li><a href="#" target="_blanck" ><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href="#" target="_blanck" ><ion-icon name="logo-instagram"></ion-icon></a></li>
                        <li><a href="#" target="_blanck" ><ion-icon name="logo-twitter"></ion-icon></a></li>
                    </ul>
                </article>
                    </article>


                </article>
            </section>
         </section>
    </section>
  )
}

export default FormularioCompra