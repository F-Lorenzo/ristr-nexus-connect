
import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { 
  User, 
  Package, 
  PlusCircle, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Calendar,
  Star,
  Edit,
  Trash2,
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  const [currentSection, setCurrentSection] = useState('servicios');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      return;
    }
    setUserData(JSON.parse(user));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  // Check if user is authenticated
  if (!userData) {
    return <Navigate to="/" replace />;
  }

  const sidebarItems = [
    { id: 'servicios', label: 'Mis Servicios Contratados', icon: <Package className="w-5 h-5" /> },
    { id: 'publicaciones', label: 'Mis Publicaciones', icon: <User className="w-5 h-5" /> },
    { id: 'publicar', label: 'Publicar Nuevo Servicio', icon: <PlusCircle className="w-5 h-5" /> },
    { id: 'perfil', label: 'Perfil', icon: <Settings className="w-5 h-5" /> },
  ];

  // Mock data for user services and publications
  const userServices = [
    {
      id: 1,
      name: "Plan Plata - RistrEvents",
      type: "Suscripción",
      status: "Activo",
      nextPayment: "2024-07-15",
      price: "$600 USD/mes"
    },
    {
      id: 2,
      name: "Consultoría en Networking",
      type: "Servicio",
      status: "En Progreso",
      nextSession: "2024-06-25",
      price: "$300 USD"
    }
  ];

  const userPublications = [
    {
      id: 1,
      title: "Consultoría en Marketing Digital",
      category: "Marketing",
      price: "$500",
      status: "Activo",
      views: 234,
      rating: 4.8
    },
    {
      id: 2,
      title: "Desarrollo de Apps Móviles",
      category: "Desarrollo",
      price: "$2000",
      status: "Pausado",
      views: 156,
      rating: 4.9
    }
  ];

  const [newService, setNewService] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    images: ''
  });

  const handlePublishService = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Servicio publicado exitosamente. Será revisado por nuestro equipo antes de aparecer en el marketplace.');
    setNewService({
      title: '',
      description: '',
      category: '',
      price: '',
      images: ''
    });
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'servicios':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">Mis Servicios Contratados</h2>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                {userServices.length} servicios activos
              </span>
            </div>
            
            <div className="grid gap-6">
              {userServices.map(service => (
                <div key={service.id} className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm mb-2">
                        {service.type}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      service.status === 'Activo' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Precio:</span>
                      <p className="text-white font-semibold">{service.price}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">
                        {service.nextPayment ? 'Próximo pago:' : 'Próxima sesión:'}
                      </span>
                      <p className="text-white font-semibold">
                        {service.nextPayment || service.nextSession}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <button className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center gap-1">
                        Ver detalles <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'publicaciones':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">Mis Publicaciones</h2>
              <button 
                onClick={() => setCurrentSection('publicar')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 flex items-center gap-2"
              >
                <PlusCircle className="w-4 h-4" />
                Nuevo Servicio
              </button>
            </div>
            
            <div className="grid gap-6">
              {userPublications.map(publication => (
                <div key={publication.id} className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{publication.title}</h3>
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                          {publication.category}
                        </span>
                        <span className="text-yellow-400 font-semibold">{publication.price}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-yellow-400 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ml-2 ${
                        publication.status === 'Activo' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {publication.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Visualizaciones:</span>
                      <p className="text-white font-semibold">{publication.views}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{publication.rating}</span>
                      <span className="text-gray-400">calificación</span>
                    </div>
                    <div className="flex justify-end">
                      <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
                        Ver en marketplace
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'publicar':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Publicar Nuevo Servicio</h2>
            
            <form onSubmit={handlePublishService} className="bg-gray-900 border border-gray-700 rounded-xl p-8 space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Título del Servicio *</label>
                <input
                  type="text"
                  value={newService.title}
                  onChange={(e) => setNewService({...newService, title: e.target.value})}
                  className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Ej: Consultoría en Marketing Digital"
                  required
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Descripción *</label>
                <textarea
                  value={newService.description}
                  onChange={(e) => setNewService({...newService, description: e.target.value})}
                  rows={4}
                  className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                  placeholder="Describe detalladamente tu servicio, qué incluye y qué beneficios ofrece..."
                  required
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Categoría *</label>
                  <select
                    value={newService.category}
                    onChange={(e) => setNewService({...newService, category: e.target.value})}
                    className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Seleccionar categoría</option>
                    <option value="consultoria">Consultoría</option>
                    <option value="marketing">Marketing Digital</option>
                    <option value="desarrollo">Desarrollo Web</option>
                    <option value="diseno">Diseño Gráfico</option>
                    <option value="legal">Servicios Legales</option>
                    <option value="finanzas">Finanzas y Contabilidad</option>
                    <option value="coaching">Coaching Empresarial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Precio *</label>
                  <input
                    type="text"
                    value={newService.price}
                    onChange={(e) => setNewService({...newService, price: e.target.value})}
                    className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Ej: $500 USD"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Imágenes (URLs)</label>
                <input
                  type="text"
                  value={newService.images}
                  onChange={(e) => setNewService({...newService, images: e.target.value})}
                  className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="URL de imagen principal (opcional)"
                />
                <p className="text-gray-400 text-sm mt-2">
                  Por ahora puedes agregar una URL de imagen. Pronto habilitaremos la carga de archivos.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-200"
              >
                Publicar Servicio
              </button>

              <p className="text-sm text-gray-400 text-center">
                * Tu servicio será revisado por nuestro equipo antes de aparecer en el marketplace
              </p>
            </form>
          </div>
        );

      case 'perfil':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Mi Perfil</h2>
            
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-4 mr-6">
                  <User className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{userData.name}</h3>
                  <p className="text-gray-400">{userData.email}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Información Personal</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">Nombre</label>
                      <input
                        type="text"
                        value={userData.name}
                        className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">Email</label>
                      <input
                        type="email"
                        value={userData.email}
                        className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">Teléfono</label>
                      <input
                        type="tel"
                        value={userData.phone || 'No proporcionado'}
                        className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Estadísticas</h4>
                  <div className="space-y-4">
                    <div className="bg-black/50 border border-gray-600 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-400">{userServices.length}</div>
                      <div className="text-gray-400 text-sm">Servicios Contratados</div>
                    </div>
                    <div className="bg-black/50 border border-gray-600 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-400">{userPublications.length}</div>
                      <div className="text-gray-400 text-sm">Servicios Publicados</div>
                    </div>
                    <div className="bg-black/50 border border-gray-600 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-400">4.8</div>
                      <div className="text-gray-400 text-sm">Calificación Promedio</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-200">
                  Editar Perfil
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-gray-400 hover:text-white transition-colors"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">Hola, {userData.name}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Salir
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:static inset-y-0 left-0 w-64 bg-gray-900 border-r border-gray-800 transition-transform duration-200 ease-in-out z-30 pt-16 lg:pt-0`}>
          <nav className="p-6 space-y-2">
            {sidebarItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                  currentSection === item.id
                    ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {renderContent()}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-20"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;
