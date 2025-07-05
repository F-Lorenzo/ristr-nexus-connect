
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import AuthModal from '../components/AuthModal';
import AdZone from '../components/AdZone';
import { ArrowRight, Users, Calendar, Target, Store } from 'lucide-react';

const Index = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      title: "Academia de Cursos",
      description: "Programas de formación especializada diseñados por expertos para acelerar tu crecimiento profesional y empresarial.",
      icon: <Target className="w-8 h-8" />,
      action: () => navigate('/cursos'),
      features: ["Cursos especializados", "Instructores expertos", "Certificaciones"]
    },
    {
      title: "RistrEvents",
      description: "Eventos de networking profesional con tres modalidades: Meet and Greet presencial, Almuerzos a Medida y formato Híbrido.",
      icon: <Calendar className="w-8 h-8" />,
      action: () => navigate('/ristr-events'),
      features: ["Meet & Greet", "Almuerzos personalizados", "Formato híbrido"]
    },
    {
      title: "Consultoría Privada",
      description: "Asesoramiento personalizado en estrategias de networking y desarrollo empresarial para maximizar conexiones profesionales.",
      icon: <Users className="w-8 h-8" />,
      action: () => navigate('/consultoria'),
      features: ["Estrategias personalizadas", "Metodología probada", "Resultados medibles"]
    },
    {
      title: "RistreMarket",
      description: "Plataforma exclusiva donde profesionales ofrecen y contratan servicios especializados en un ecosistema de confianza.",
      icon: <Store className="w-8 h-8" />,
      action: () => navigate('/marketplace'),
      features: ["Servicios verificados", "Conexiones directas", "Ecosistema confiable"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 animate-pulse"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent animate-fade-in">
            Conecta. Crece. Transforma.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Bienvenido al ecosistema Ristretto la comunidad empresarial  más exclusiva donde el networking trasciende las conexiones tradicionales. 
            Descubre espacios únicos, eventos premium y un marketplace de servicios profesionales de élite.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setShowAuthModal(true)}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25"
            >
              Únete a la Comunidad
            </button>
            <button 
              onClick={() => navigate('/marketplace')}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Explorar RistreMarket
            </button>
          </div>
        </div>
      </section>

      {/* Ad Zone - After Hero */}
      <div className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <AdZone title="Publicidad Premium" size="rectangle" position="Post-Hero" />
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Nuestro Universo de Servicios
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cuatro pilares fundamentales que revolucionan la forma en que los profesionales se conectan, colaboran y crecen juntos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-black/50 border border-gray-700 rounded-xl p-8 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 cursor-pointer group"
                onClick={service.action}
              >
                <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <ArrowRight className="w-4 h-4 text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:text-orange-400 transition-colors duration-300">
                  Explorar <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Ad Zone - Middle of Services */}
          <div className="mt-16 mb-8 flex justify-center">
            <AdZone title="Espacio Publicitario" size="square" position="Centro de Servicios" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            ¿Listo para transformar tu red profesional?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Únete a una comunidad exclusiva de líderes empresariales, emprendedores visionarios y profesionales de élite. 
            Tu próxima gran oportunidad te está esperando.
          </p>
          <button 
            onClick={() => setShowAuthModal(true)}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-lg font-bold text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25"
          >
            Comenzar Ahora
          </button>
        </div>
      </section>

      {/* Ad Zone - Before Footer */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <AdZone title="Banner Inferior" size="banner" position="Pre-Footer" />
        </div>
      </div>

      {/* Solidarity Action */}
      <section className="py-16 bg-gray-800 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl font-bold text-white mb-4">Compromiso Social</h3>
          <p className="text-gray-400 mb-8">
            Creemos en el poder del networking para generar impacto positivo en la sociedad.
          </p>
          <button 
            onClick={() => window.location.href = '#'}
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Acción Solidaria
          </button>
        </div>
      </section>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)} 
        />
      )}
    </Layout>
  );
};

export default Index;
