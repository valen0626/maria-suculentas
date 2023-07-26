import Enlaces from "./Enlaces"
import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <section className="footer">
      
        <Enlaces/>
        <Link className="footer" to={'/terminosycondiciones'}><h4>Terminos y Condiciones</h4></Link>
        <h4> Copyright 2023 © | Medellín - Colombia</h4>
         
      </section>
    )
  }
  
  export default Footer;