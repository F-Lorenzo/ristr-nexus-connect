
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
              NetworkPro
            </div>
            <p className="text-gray-400 mb-4">
              El ecosistema empresarial más exclusivo para networking y crecimiento profesional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><Link to="/top" className="text-gray-400 hover:text-yellow-400 transition-colors">TOP - Museo Deportivo</Link></li>
              <li><Link to="/ristr-events" className="text-gray-400 hover:text-yellow-400 transition-colors">RistrEvents</Link></li>
              <li><Link to="/consultoria" className="text-gray-400 hover:text-yellow-400 transition-colors">Consultoría Privada</Link></li>
              <li><Link to="/marketplace" className="text-gray-400 hover:text-yellow-400 transition-colors">Marketplace</Link></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4">Plataforma</h3>
            <ul className="space-y-2">
              <li><Link to="/dashboard" className="text-gray-400 hover:text-yellow-400 transition-colors">Dashboard</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Soporte</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Términos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacidad</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                contact@networkpro.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                123 Business Ave, City
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 NetworkPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
