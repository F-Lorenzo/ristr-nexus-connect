import { useState } from 'react';
import Layout from '../components/Layout';
import AuthModal from '../components/AuthModal';
import { Search, Filter, Star, Users, MapPin, Award, ChevronDown, Play } from 'lucide-react';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProvider, setSelectedProvider] = useState('all');
  const [showAuthModal, setShowAuthModal] = useState(false);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'consultoria', name: 'Consultoría' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'desarrollo', name: 'Desarrollo' },
    { id: 'diseno', name: 'Diseño' },
    { id: 'legal', name: 'Legal' },
    { id: 'finanzas', name: 'Finanzas' },
    { id: 'coaching', name: 'Coaching' }
  ];

  const providers = [
    { id: 'all', name: 'Todos los Proveedores' },
    { id: 'digital-consulting', name: 'Digital Consulting' },
    { id: 'marketing-strategist', name: 'Marketing Strategist' },
    { id: 'dev-premium', name: 'Dev Premium' },
    { id: 'creative-studio', name: 'Creative Studio' },
    { id: 'legal-corp', name: 'Legal Corp' },
    { id: 'finance-pro', name: 'Finance Pro' }
  ];

  // Sponsors por categoría
  const categorySponsors = {
    'consultoria': { name: 'Digital Consulting', logo: 'DC' },
    'marketing': { name: 'Marketing Strategist', logo: 'MS' },
    'desarrollo': { name: 'Dev Premium', logo: 'DP' },
    'diseno': { name: 'Creative Studio', logo: 'CS' },
    'legal': { name: 'Legal Corp', logo: 'LC' },
    'finanzas': { name: 'Finance Pro', logo: 'FP' },
    'coaching': { name: 'Business Coach', logo: 'BC' },
    'all': { name: 'RistreMarket Premium', logo: 'RM' }
  };

  const services = [
    {
      id: 1,
      title: "Consultoría en Transformación Digital",
      provider: "María González",
      providerCompany: "Digital Consulting",
      providerId: "digital-consulting",
      category: "consultoria",
      price: "$2500",
      rating: 4.9,
      reviews: 127,
      clients: 45,
      location: "Madrid, España",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Acompañamiento integral para la digitalización de procesos empresariales con metodologías ágiles."
    },
    {
      id: 2,
      title: "Estrategia de Marketing Digital 360°",
      provider: "Carlos Mendoza",
      providerCompany: "Marketing Strategist",
      providerId: "marketing-strategist",
      category: "marketing",
      price: "$1800",
      rating: 4.8,
      reviews: 89,
      clients: 67,
      location: "Barcelona, España",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Desarrollo de estrategias integrales de marketing digital con enfoque en ROI y crecimiento sostenible."
    },
    {
      id: 3,
      title: "Desarrollo de Aplicaciones Web Premium",
      provider: "Ana Rodríguez",
      providerCompany: "Dev Premium",
      providerId: "dev-premium",
      category: "desarrollo",
      price: "$5000",
      rating: 5.0,
      reviews: 45,
      clients: 23,
      location: "Valencia, España",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Creación de aplicaciones web escalables con tecnologías modernas y UX/UI optimizado."
    },
    {
      id: 4,
      title: "Identidad Corporativa y Branding",
      provider: "Luis Santos",
      providerCompany: "Creative Studio",
      providerId: "creative-studio",
      category: "diseno",
      price: "$1200",
      rating: 4.7,
      reviews: 156,
      clients: 89,
      location: "Sevilla, España",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Diseño integral de identidad visual corporativa que refleje los valores de tu marca."
    },
    {
      id: 5,
      title: "Asesoría Legal Empresarial Integral",
      provider: "Dr. Patricia Vera",
      providerCompany: "Legal Corp",
      providerId: "legal-corp",
      category: "legal",
      price: "$800",
      rating: 4.9,
      reviews: 203,
      clients: 134,
      location: "Bilbao, España",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Acompañamiento legal completo para empresas en crecimiento y compliance."
    },
    {
      id: 6,
      title: "Gestión Financiera y Optimización Fiscal",
      provider: "Roberto Díaz",
      providerCompany: "Finance Pro",
      providerId: "finance-pro",
      category: "finanzas",
      price: "$1500",
      rating: 4.8,
      reviews: 78,
      clients: 56,
      location: "Madrid, España",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Optimización de estructura financiera y planificación fiscal estratégica."
    }
  ];

  const currentSponsor = categorySponsors[selectedCategory];

  // Ordenar servicios: primero los del sponsor actual
  const sortedServices = [...services].sort((a, b) => {
    if (selectedCategory !== 'all') {
      const aIsSponsored = a.providerId === currentSponsor?.name?.toLowerCase().replace(/ /g, '-');
      const bIsSponsored = b.providerId === currentSponsor?.name?.toLowerCase().replace(/ /g, '-');
      if (aIsSponsored && !bIsSponsored) return -1;
      if (!aIsSponsored && bIsSponsored) return 1;
    }
    return 0;
  });

  const filteredServices = sortedServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesProvider = selectedProvider === 'all' || service.providerId === selectedProvider;
    return matchesSearch && matchesCategory && matchesProvider;
  });

  const isAuthenticated = localStorage.getItem('user') !== null;

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-20 pb-8 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            RistreMarket
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Marketplace exclusivo de servicios profesionales de élite. Conecta con proveedores verificados en nuestro ecosistema de confianza.
          </p>
          
          {/* Search Bar */}
          <div className="flex items-center bg-gray-900 border border-gray-700 rounded-lg p-3 max-w-md">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Buscar servicios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent text-white focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            {/* Provider Filter */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-6">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Filter className="w-4 h-4 mr-2 text-yellow-400" />
                Filtro por proveedor
              </h3>
              <div className="space-y-2">
                {providers.map((provider) => (
                  <label key={provider.id} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="provider"
                      value={provider.id}
                      checked={selectedProvider === provider.id}
                      onChange={(e) => setSelectedProvider(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                      selectedProvider === provider.id 
                        ? 'border-yellow-400 bg-yellow-400' 
                        : 'border-gray-600'
                    }`}>
                      {selectedProvider === provider.id && (
                        <div className="w-2 h-2 bg-black rounded"></div>
                      )}
                    </div>
                    <span className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
                      {provider.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Advertisement Section */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-3">Publicidad</h3>
              <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Espacio Publicitario</span>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="flex-1">
            {/* Sponsor Section */}
            <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-lg p-6 mb-6">
              <h3 className="text-yellow-400 font-semibold mb-3">Sponsor Temático</h3>
              <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">{currentSponsor.logo}</div>
                  <div className="text-white font-medium">{currentSponsor.name}</div>
                  <div className="text-gray-400 text-sm">Patrocinador oficial</div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-xl font-semibold">
                {filteredServices.length} servicio{filteredServices.length !== 1 ? 's' : ''} encontrado{filteredServices.length !== 1 ? 's' : ''}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div 
                  key={service.id}
                  className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 cursor-pointer group"
                >
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="w-12 h-12 text-yellow-400" />
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 px-2 py-1 rounded-lg">
                      <span className="text-yellow-400 font-bold">{service.price}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full">
                        {categories.find(c => c.id === service.category)?.name}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span className="text-sm font-semibold">{service.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        <span>Por {service.provider}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{service.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700 mb-4">
                      <div className="flex items-center text-gray-400">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">{service.clients} clientes</span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {service.reviews} reseñas
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => !isAuthenticated && setShowAuthModal(true)}
                      className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-200"
                    >
                      {isAuthenticated ? 'Contratar Servicio' : 'Regístrate para Contratar'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <div className="text-gray-400 text-xl mb-4">
                  No se encontraron servicios con los filtros seleccionados
                </div>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedProvider('all');
                  }}
                  className="text-yellow-400 hover:text-orange-400 transition-colors duration-200"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
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

export default Marketplace;
