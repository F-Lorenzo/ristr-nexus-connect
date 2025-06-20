
import { useState } from 'react';
import Layout from '../components/Layout';
import { Target, Users, TrendingUp, CheckCircle, ArrowRight, Star } from 'lucide-react';

const Consultoria = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    objectives: '',
    experience: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Solicitud de consultoría enviada exitosamente. Nos contactaremos contigo en las próximas 24 horas.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      position: '',
      objectives: '',
      experience: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Estrategia Personalizada",
      description: "Desarrollo de un plan de networking único basado en tus objetivos profesionales y sector empresarial."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Red de Contactos Elite",
      description: "Acceso exclusivo a nuestra red de líderes empresariales, inversionistas y tomadores de decisión."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Metodología Probada",
      description: "Sistema estructurado con métricas de seguimiento para medir el ROI de tus conexiones profesionales."
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Diagnóstico Profesional",
      description: "Análisis profundo de tu perfil, objetivos y ecosistema empresarial actual."
    },
    {
      step: "02", 
      title: "Estrategia Personalizada",
      description: "Diseño de plan de networking específico con objetivos medibles y timeline claro."
    },
    {
      step: "03",
      title: "Implementación Guiada",
      description: "Acompañamiento en la ejecución con sesiones semanales de seguimiento y ajustes."
    },
    {
      step: "04",
      title: "Medición y Optimización",
      description: "Análisis de resultados y optimización continua de la estrategia de networking."
    }
  ];

  const testimonials = [
    {
      name: "María Rodríguez",
      position: "CEO, TechInnovate",
      content: "La consultoría transformó completamente mi enfoque de networking. En 6 meses logré conexiones que me tomaron años desarrollar.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      position: "Director, Capital Ventures",
      content: "Metodología excepcional. El ROI en mi red de contactos se multiplicó por 3 gracias a su estrategia personalizada.",
      rating: 5
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
              Consultoría Privada en Networking
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Potencia tu carrera profesional con asesoramiento estratégico personalizado. 
              Transforma tu red de contactos en tu activo más valioso con metodología probada y resultados medibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center text-yellow-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>100% Personalizado</span>
              </div>
              <div className="flex items-center text-yellow-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>ROI Comprobado</span>
              </div>
              <div className="flex items-center text-yellow-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Confidencialidad Total</span>
              </div>
            </div>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-2"
            >
              Agendar Consulta
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Consultoría Privada" 
              className="rounded-xl shadow-2xl border border-gray-700"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              ¿Por qué elegir nuestra consultoría?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Más de 10 años ayudando a líderes empresariales a construir redes de contactos estratégicas que impulsan resultados extraordinarios.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-black/50 border border-gray-700 rounded-xl p-8 text-center hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-yellow-400 mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Nuestra Metodología
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Un proceso estructurado en 4 fases diseñado para maximizar el impacto de tu estrategia de networking.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-yellow-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Resultados Comprobados
            </h2>
            <p className="text-xl text-gray-400">
              Descubre cómo hemos transformado la carrera profesional de nuestros clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black/50 border border-gray-700 rounded-xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-yellow-400 text-sm">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Solicita tu Consulta Estratégica
            </h2>
            <p className="text-xl text-gray-400">
              Completa el formulario y nuestro equipo se contactará contigo para agendar una sesión inicial gratuita de 30 minutos.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-700 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-2">Nombre Completo *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
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
                  className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
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
                  className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Empresa</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-semibold mb-2">Posición/Cargo</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Experiencia en Networking</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                >
                  <option value="">Seleccionar nivel</option>
                  <option value="principiante">Principiante</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado</option>
                  <option value="experto">Experto</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">Objetivos de Networking *</label>
              <textarea
                name="objectives"
                value={formData.objectives}
                onChange={handleInputChange}
                rows={3}
                placeholder="Describe tus objetivos principales de networking y crecimiento profesional..."
                className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">Información Adicional</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Cuéntanos más sobre tus desafíos actuales, industria, o cualquier información relevante..."
                className="w-full bg-black border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Solicitar Consulta Gratuita
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-sm text-gray-400 text-center mt-4">
              * Consulta inicial de 30 minutos completamente gratuita y sin compromiso
            </p>
          </form>
        </div>
      </section>

      {/* Solidarity Action */}
      <section className="py-16 bg-gray-800 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl font-bold text-white mb-4">Compromiso Social</h3>
          <p className="text-gray-400 mb-8">
            Por cada consultoría contratada, mentoreamos gratuitamente a un emprendedor de comunidades vulnerables.
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

export default Consultoria;
