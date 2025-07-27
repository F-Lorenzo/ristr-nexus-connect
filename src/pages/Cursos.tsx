import { useState } from 'react';
import Layout from '../components/Layout';
import { Search, Filter, Star, Clock, Users, BookOpen, Play, Award, ChevronDown } from 'lucide-react';

const Cursos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedProvider, setSelectedProvider] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'ia', name: 'IA' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'rrhh', name: 'RRHH' },
    { id: 'finanzas', name: 'Finanzas' },
    { id: 'liderazgo', name: 'Liderazgo' }
  ];

  const providers = [
    { id: 'todos', name: 'Todos los Proveedores' },
    { id: 'universidad-barcelona', name: 'Universidad de Barcelona' },
    { id: 'universidad-madrid', name: 'Universidad de Madrid' },
    { id: 'universidad-valencia', name: 'Universidad de Valencia' },
    { id: 'universidad-sevilla', name: 'Universidad de Sevilla' },
    { id: 'universidad-bilbao', name: 'Universidad de Bilbao' }
  ];

  const courses = [
    {
      id: 1,
      title: "Networking Estratégico para Ejecutivos",
      instructor: "Carlos Mendoza",
      category: "liderazgo",
      provider: "universidad-barcelona",
      duration: "8 horas",
      students: 1250,
      rating: 4.9,
      price: "$299",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Domina las técnicas avanzadas de networking para crear conexiones profesionales duraderas y estratégicas."
    },
    {
      id: 2,
      title: "Liderazgo Transformacional",
      instructor: "Ana García",
      category: "liderazgo",
      provider: "universidad-madrid",
      duration: "12 horas",
      students: 890,
      rating: 4.8,
      price: "$399",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Desarrolla habilidades de liderazgo que inspiren y transformen equipos hacia el éxito empresarial."
    },
    {
      id: 3,
      title: "Inteligencia Artificial para Negocios",
      instructor: "Roberto Silva",
      category: "ia",
      provider: "universidad-valencia",
      duration: "10 horas",
      students: 756,
      rating: 4.7,
      price: "$349",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Aprende a implementar soluciones de IA en tu empresa para optimizar procesos y tomar decisiones estratégicas."
    },
    {
      id: 4,
      title: "Marketing Digital Avanzado",
      instructor: "Laura Torres",
      category: "marketing",
      provider: "universidad-sevilla",
      duration: "6 horas",
      students: 2100,
      rating: 4.6,
      price: "$199",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Estrategias avanzadas de marketing digital para hacer crecer tu negocio en el entorno digital actual."
    },
    {
      id: 5,
      title: "Gestión de Recursos Humanos",
      instructor: "Miguel Rodríguez",
      category: "rrhh",
      provider: "universidad-bilbao",
      duration: "14 horas",
      students: 643,
      rating: 4.8,
      price: "$449",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Técnicas modernas de gestión de RRHH para crear equipos de alto rendimiento y cultura empresarial sólida."
    },
    {
      id: 6,
      title: "Finanzas Corporativas",
      instructor: "Patricia Morales",
      category: "finanzas",
      provider: "universidad-barcelona",
      duration: "16 horas",
      students: 1876,
      rating: 4.9,
      price: "$499",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Domina las finanzas corporativas para tomar decisiones de inversión y financiamiento estratégicas."
    },
    {
      id: 7,
      title: "Machine Learning Aplicado",
      instructor: "David Sánchez",
      category: "ia",
      provider: "universidad-madrid",
      duration: "20 horas",
      students: 945,
      rating: 4.7,
      price: "$599",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Implementa algoritmos de machine learning para resolver problemas reales de negocio."
    },
    {
      id: 8,
      title: "Estrategias de Marketing Digital",
      instructor: "Carmen López",
      category: "marketing",
      provider: "universidad-valencia",
      duration: "8 horas",
      students: 1340,
      rating: 4.6,
      price: "$299",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Desarrolla estrategias de marketing digital efectivas para aumentar tu presencia online."
    },
    {
      id: 9,
      title: "Liderazgo Ejecutivo",
      instructor: "Fernando Ruiz",
      category: "liderazgo",
      provider: "universidad-sevilla",
      duration: "12 horas",
      students: 687,
      rating: 4.8,
      price: "$399",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Desarrolla habilidades de liderazgo ejecutivo para dirigir organizaciones de alto rendimiento."
    }
  ];

  const filteredCourses = courses.filter(course => {
    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'todos' || course.category === selectedCategory) &&
      (selectedProvider === 'todos' || course.provider === selectedProvider)
    );
  });

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-20 pb-8 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Academia Profesional
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Cursos especializados diseñados por expertos para acelerar tu crecimiento profesional y empresarial.
          </p>
          
          {/* Search Bar */}
          <div className="flex items-center bg-gray-900 border border-gray-700 rounded-lg p-3 max-w-md">
            <Search className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Buscar cursos..."
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

          {/* Courses Grid */}
          <div className="flex-1">
            {/* Sponsor Section */}
            <div className="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-lg p-6 mb-6">
              <h3 className="text-yellow-400 font-semibold mb-3">Sponsor Temático</h3>
              <div className="bg-gray-800 rounded-lg h-32 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Espacio Publicitario</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white text-xl font-semibold">
                {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''} encontrado{filteredCourses.length !== 1 ? 's' : ''}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div 
                  key={course.id}
                  className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 cursor-pointer group"
                >
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="w-12 h-12 text-yellow-400" />
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 px-2 py-1 rounded-lg">
                      <span className="text-yellow-400 font-bold">{course.price}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded-full">
                        {categories.find(c => c.id === course.category)?.name}
                      </span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span className="text-sm font-semibold">{course.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        <span>Por {course.instructor}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700 mb-4">
                      <div className="flex items-center text-gray-400">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">{course.students} estudiantes</span>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {providers.find(p => p.id === course.provider)?.name}
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-200">
                      Inscribirse Ahora
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-20">
                <div className="text-gray-400 text-xl mb-4">
                  No se encontraron cursos con los filtros seleccionados
                </div>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('todos');
                    setSelectedProvider('todos');
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
    </Layout>
  );
};

export default Cursos;