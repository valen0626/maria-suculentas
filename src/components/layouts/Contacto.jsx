
const Contacto = () => {
    return (
        <>
         <section className="seccion">
            <section className="container_contactos">
                
                <article className="contactForm">

                    <h2>Mensaje</h2>
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
                            <span>Celular</span>
                        </article>
                        <article className="inputBox w100">
                            <textarea required></textarea>
                            <span>Escribe tu mensaje aqui...</span>
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
        </>
    )
}

export default Contacto;