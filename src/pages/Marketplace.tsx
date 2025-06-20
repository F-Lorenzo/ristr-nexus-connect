
import { useState } from 'react';
import Layout from '../components/Layout';
import ServiceCard from '../components/ServiceCard';
import AuthModal from '../components/AuthModal';
import { Search, Filter, Star, ArrowRight } from 'lucide-react';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAuthModal, setShowAuthModal] = useState(false);

  const categories = [
    { id: 'all', name: 'Todos los Servicios' },
    { id: 'consultoria', name: 'Consultoría' },
    { id: 'marketing', name: 'Marketing Digital' },
    { id: 'desarrollo', name: 'Desarrollo Web' },
    { id: 'diseno', name: 'Diseño Gráfico' },
    { id: 'legal', name: 'Servicios Legales' },
    { id: 'finanzas', name: 'Finanzas y Contabilidad' },
    { id: 'coaching', name: 'Coaching Empresarial' }
  ];

  const services = [
    {
      id: 1,
      title: "Consultoría en Transformación Digital",
      description: "Acompañamiento integral para la digitalización de procesos empresariales con metodologías ágiles y tecnologías de vanguardia.",
      provider: "María González",
      providerTitle: "CEO Digital Consulting",
      price: "$2500",
      rating: 4.9,
      reviews: 127,
      category: "consultoria",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Estrategia de Marketing Digital 360°",
      description: "Desarrollo de estrategias integrales de marketing digital con enfoque en ROI y crecimiento sostenible.",
      provider: "Carlos Mendoza",
      providerTitle: "Marketing Strategist",
      price: "$1800",
      rating: 4.8,
      reviews: 89,
      category: "marketing",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Desarrollo de Aplicaciones Web Premium",
      description: "Creación de aplicaciones web escalables con tecnologías modernas, UX/UI optimizado y arquitectura robusta.",
      provider: "Ana Rodríguez",
      providerTitle: "Full Stack Developer",
      price: "$5000",
      rating: 5.0,
      reviews: 45,
      category: "desarrollo",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 4,
      title: "Identidad Corporativa y Branding",
      description: "Diseño integral de identidad visual corporativa que refleje los valores y posicionamiento de tu marca.",
      provider: "Luis Santos",
      providerTitle: "Creative Director",
      price: "$1200",
      rating: 4.7,
      reviews: 156,
      category: "diseno",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 5,
      title: "Asesoría Legal Empresarial Integral",
      description: "Acompañamiento legal completo para empresas en crecimiento, contratos, compliance y estructuras societarias.",
      provider: "Dr. Patricia Vera",
      providerTitle: "Abogada Corporativa",
      price: "$800",
      rating: 4.9,
      reviews: 203,
      category: "legal",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 6,
      title: "Gestión Financiera y Optimización Fiscal",
      description: "Optimización de estructura financiera, planificación fiscal estratégica y control de gestión empresarial.",
      provider: "Roberto Díaz",
      providerTitle: "CFO & Tax Advisor",
      price: "$1500",
      rating: 4.8,
      reviews: 78,
      category: "finanzas",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredServices = services.filter(service => service.featured);

  const isAuthenticated = localStorage.getItem('user') !== null;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 animate-pulse"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
            Marketplace
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Descubre servicios profesionales de élite ofrecidos por expertos verificados. 
            Conecta directamente con proveedores de confianza en un ecosistema exclusivo.
          </p>
          {!isAuthenticated && (
            <div className="bg-gray-900 border border-yellow-400/50 rounded-xl p-8 max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">¿Listo para acceder?</h3>
              <p className="text-gray-300 mb-6">
                Regístrate para contratar servicios y conectar directamente con proveedores verificados
              </p>
              <button 
                onClick={() => setShowAuthModal(true)}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                Regístrate para Comprar
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar servicios, proveedores o palabras clave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black border border-gray-600 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-black border border-gray-600 rounded-lg px-4 py-4 text-white focus:border-yellow-400 focus:outline-none transition-colors min-w-48"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Mostrando {filteredServices.length} servicios
              {selectedCategory !== 'all' && ` en ${categories.find(c => c.id === selectedCategory)?.name}`}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      {featuredServices.length > 0 && (
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Servicios Destacados
              </h2>
              <p className="text-xl text-gray-400">
                Los servicios más populares y mejor valorados por nuestra comunidad
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map(service => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  onAction={() => !isAuthenticated && setShowAuthModal(true)}
                  isAuthenticated={isAuthenticated}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Todos los Servicios
            </h2>
          </div>
          
          {filteredServices.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map(service => (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  onAction={() => !isAuthenticated && setShowAuthModal(true)}
                  isAuthenticated={isAuthenticated}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No se encontraron servicios</h3>
              <p className="text-gray-400 mb-8">
                Intenta con otros términos de búsqueda o selecciona una categoría diferente
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-200"
              >
                Ver Todos los Servicios
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section for Non-Authenticated Users */}
      {!isAuthenticated && (
        <section className="py-20 bg-black border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              ¿Listo para conectar con los mejores?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Únete a nuestra plataforma y accede a servicios profesionales de élite. 
              Regístrate ahora y comienza a construir tu red de proveedores de confianza.
            </p>
            <button 
              onClick={() => setShowAuthModal(true)}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-lg font-bold text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Crear Cuenta Gratuita
            </button>
          </div>
        </section>
      )}

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

export default Marketplace;
