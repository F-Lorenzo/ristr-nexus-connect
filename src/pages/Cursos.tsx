
import { useState } from 'react';
import Layout from '../components/Layout';
import { Search, Filter, Star, Clock, Users, BookOpen, Play, Award } from 'lucide-react';

const Cursos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedLevel, setSelectedLevel] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos los Cursos' },
    { id: 'networking', name: 'Networking' },
    { id: 'liderazgo', name: 'Liderazgo' },
    { id: 'ventas', name: 'Ventas' },
    { id: 'marketing', name: 'Marketing Digital' },
    { id: 'emprendimiento', name: 'Emprendimiento' },
    { id: 'finanzas', name: 'Finanzas' }
  ];

  const levels = [
    { id: 'todos', name: 'Todos los Niveles' },
    { id: 'principiante', name: 'Principiante' },
    { id: 'intermedio', name: 'Intermedio' },
    { id: 'avanzado', name: 'Avanzado' }
  ];

  const courses = [
    {
      id: 1,
      title: "Networking Estratégico para Ejecutivos",
      instructor: "Carlos Mendoza",
      category: "networking",
      level: "avanzado",
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
      level: "intermedio",
      duration: "12 horas",
      students: 890,
      rating: 4.8,
      price: "$399",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Desarrolla habilidades de liderazgo que inspiren y transformen equipos hacia el éxito empresarial."
    },
    {
      id: 3,
      title: "Ventas Consultivas de Alto Impacto",
      instructor: "Roberto Silva",
      category: "ventas",
      level: "intermedio",
      duration: "10 horas",
      students: 756,
      rating: 4.7,
      price: "$349",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Aprende técnicas de ventas consultivas para cerrar negocios de mayor valor y construir relaciones duraderas."
    },
    {
      id: 4,
      title: "Marketing Digital para Emprendedores",
      instructor: "Laura Torres",
      category: "marketing",
      level: "principiante",
      duration: "6 horas",
      students: 2100,
      rating: 4.6,
      price: "$199",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Fundamentos del marketing digital para hacer crecer tu negocio en el entorno digital actual."
    },
    {
      id: 5,
      title: "Finanzas Personales y Empresariales",
      instructor: "Miguel Rodríguez",
      category: "finanzas",
      level: "intermedio",
      duration: "14 horas",
      students: 643,
      rating: 4.8,
      price: "$449",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Gestiona eficientemente tus finanzas personales y empresariales para alcanzar la libertad financiera."
    },
    {
      id: 6,
      title: "Emprendimiento Digital",
      instructor: "Patricia Morales",
      category: "emprendimiento",
      level: "principiante",
      duration: "16 horas",
      students: 1876,
      rating: 4.9,
      price: "$499",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Todo lo que necesitas saber para lanzar y hacer crecer tu emprendimiento digital desde cero."
    }
  ];

  const filteredCourses = courses.filter(course => {
    return (
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'todos' || course.category === selectedCategory) &&
      (selectedLevel === 'todos' || course.level === selectedLevel)
    );
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 animate-pulse"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Academia Profesional
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Cursos especializados diseñados por expertos para acelerar tu crecimiento profesional y empresarial.
          </p>
          <div className="flex justify-center">
            <div className="flex items-center bg-black/50 border border-gray-700 rounded-lg p-2 max-w-md w-full">
              <Search className="w-5 h-5 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent text-white px-4 py-2 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Filtros:</span>
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-black/50 border border-gray-700 text-white px-4 py-2 rounded-lg focus:border-yellow-400 focus:outline-none"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-black/50 border border-gray-700 text-white px-4 py-2 rounded-lg focus:border-yellow-400 focus:outline-none"
            >
              {levels.map(level => (
                <option key={level.id} value={level.id}>{level.name}</option>
              ))}
            </select>

            <div className="ml-auto text-gray-400">
              {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''} encontrado{filteredCourses.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="text-sm">{course.students} estudiantes</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Award className="w-4 h-4 mr-1" />
                      <span className="text-sm capitalize">{course.level}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-200">
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
                  setSelectedLevel('todos');
                }}
                className="text-yellow-400 hover:text-orange-400 transition-colors duration-200"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            ¿No encuentras el curso que buscas?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Contáctanos y diseñaremos un programa de formación personalizado para ti o tu empresa.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-lg font-bold text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25">
            Solicitar Curso Personalizado
          </button>
        </div>
      </section>

      {/* Solidarity Section */}
      <section className="py-16 bg-gray-800 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl font-bold text-white mb-4">Compromiso Social</h3>
          <p className="text-gray-400 mb-8">
            Por cada curso vendido, otorgamos una beca completa a un emprendedor de comunidades vulnerables.
          </p>
          <button 
            onClick={() => window.location.href = '#'}
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Programa de Becas
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Cursos;
