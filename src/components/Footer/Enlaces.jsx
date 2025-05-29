import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faFacebook, faTwitter, faInstagram);

const Enlaces = () => {
    return (
        <section className='redes'>
            <p>Siguenos</p>
            <a href="" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className='icono' />
            </a>
            <a href="" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className='icono' />
            </a>
            <a href="https:" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className='icono' />
            </a>

        </section>
    );
};
export default Enlaces;