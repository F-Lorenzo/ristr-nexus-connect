
import { useState } from 'react';
import Layout from '../components/Layout';
import { MapPin, Users, Calendar, Clock, Star, ArrowRight } from 'lucide-react';

const TOP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    attendees: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Consulta enviada exitosamente. Nos contactaremos contigo pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: '',
      attendees: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación Premium",
      description: "Espacio exclusivo en el corazón de la ciudad con fácil acceso y estacionamiento"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Capacidad Flexible",
      description: "Espacios adaptables para eventos de 20 a 300 personas"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Ambiente Único",
      description: "Decoración deportiva premium que inspira liderazgo y excelencia"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Servicio 24/7",
      description: "Equipo dedicado disponible para eventos en cualquier horario"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              TOP - Museo Deportivo
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Un espacio físico único que combina la pasión del deporte con la elegancia empresarial. 
              El lugar perfecto para eventos de networking que inspiran grandeza y fomentan conexiones extraordinarias.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-yellow-400">
                <Star className="w-5 h-5 mr-2" />
                <span>Calificación 5.0/5.0</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-5 h-5 mr-2" />
                <span>Capacidad 20-300 personas</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="TOP Museo Deportivo" 
              className="rounded-xl shadow-2xl border border-gray-700"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              ¿Por qué elegir TOP?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Más que un espacio, es una experiencia que transforma eventos ordinarios en encuentros extraordinarios.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-black/50 border border-gray-700 rounded-xl p-8 text-center hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-yellow-400 mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Galería del Espacio
            </h2>
            <p className="text-xl text-gray-400">
              Descubre la magnificencia de nuestras instalaciones
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ].map((image, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img 
                  src={image} 
                  alt={`Galería ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Ver más</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Consulta Disponibilidad
            </h2>
            <p className="text-xl text-gray-400">
              Completa el formulario y nuestro equipo se contactará contigo para personalizar tu evento
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-black/50 border border-gray-700 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-2">Nombre *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-2">Teléfono *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Fecha del Evento *</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-2">Tipo de Evento *</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Seleccionar tipo</option>
                  <option value="meet">Meet & Greet</option>
                  <option value="networking">Networking Empresarial</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="conferencia">Conferencia</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Número de Asistentes *</label>
                <input
                  type="number"
                  name="attendees"
                  value={formData.attendees}
                  onChange={handleInputChange}
                  placeholder="Ej: 50"
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">Mensaje Adicional</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Cuéntanos más detalles sobre tu evento..."
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Enviar Consulta
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Solidarity Action */}
      <section className="py-16 bg-gray-800 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl font-bold text-white mb-4">Compromiso Social</h3>
          <p className="text-gray-400 mb-8">
            Por cada evento realizado en TOP, contribuimos con programas deportivos para jóvenes en comunidades vulnerables.
          </p>
          <button 
            onClick={() => window.location.href = '#'}
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Acción Solidaria
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default TOP;
