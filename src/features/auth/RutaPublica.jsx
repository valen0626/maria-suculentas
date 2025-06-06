import { Route } from "react-router-dom";
import { PropTypes } from "prop-types";

const RutaPublica = (props) => {
    const { layout: Layout, component: Component, ...rest } = props
  return (
    <Route {...rest} element={(matchProps) => <Layout>{<Component {...matchProps}/>}</Layout>} />
  )
}

RutaPublica.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string,
}

export default RutaPublica