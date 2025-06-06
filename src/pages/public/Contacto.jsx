import Footer from '../../components/Footer/Footer';
import Menu from "../../components/Menu/Menu";

const Contacto = () => {
    return (
        <section>
            <Menu/>
            <section className="seccion">

                <section className="container_contactos">

                    <article className="contactForm">

                        <h1>Mensaje</h1>
                        <form className="formularioBox">
                            <div className="datos-form">
                                <div className="column-left">
                                    <label htmlFor="">Nombre</label>
                                    <input type="text" placeholder="Nombre" />

                                    <label htmlFor="">Apellido</label>
                                    <input type="text" placeholder="Apellido" />
                                </div>
                                <div className="column-right">
                                    <label htmlFor="">Correo</label>
                                    <input type="email" placeholder="Correo" />

                                    <label htmlFor="">Teléfono</label>
                                    <input type="text" placeholder="Teléfono" />
                                </div>
                            </div>

                            <label htmlFor="">Mensaje</label>
                            <textarea placeholder="Escribe tu mensaje aqui..." required></textarea>

                            <input type="submit" value={"Enviar"} />

                        </form>
                    </article>
                </section>
            </section>
            <Footer />
        </section>

    )
}

export default Contacto;