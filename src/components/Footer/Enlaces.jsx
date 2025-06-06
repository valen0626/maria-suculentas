import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faFacebook, faTwitter, faInstagram);

const Enlaces = () => {
  return (
    <section className="flex flex-col items-center gap-2">
      <p className="text-lg font-medium">Síguenos</p>
      <div className="flex gap-4">
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition">
          <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
          <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition">
          <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Enlaces;
