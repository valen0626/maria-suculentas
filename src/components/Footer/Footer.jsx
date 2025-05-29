import Enlaces from "./Enlaces"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="footer">
      
        <Enlaces/>
        <p> Copyright 2023 © | Medellín - Colombia</p>
        <Link to={'/terminosycondiciones'} className="link-terminos">Terminos y Condiciones</Link>

         
      </footer>
    )
  }
  
  export default Footer;