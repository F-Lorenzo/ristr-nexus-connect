
import { useState } from 'react';
import Layout from '../components/Layout';
import { Users, Coffee, Monitor, Check, Star, ArrowRight, Crown } from 'lucide-react';

const RistrEvents = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const eventTypes = [
    {
      title: "Meet and Greet",
      description: "Eventos presenciales de networking diseñados para crear conexiones auténticas en un ambiente relajado y profesional.",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Networking cara a cara",
        "Ambiente profesional relajado",
        "Facilitadores expertos",
        "Follow-up personalizado"
      ],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Almuerzos a Medida",
      description: "Experiencias gastronómicas exclusivas combinadas con networking estratégico, diseñadas según las necesidades específicas de cada grupo.",
      icon: <Coffee className="w-8 h-8" />,
      features: [
        "Menús personalizados",
        "Grupos exclusivos 8-12 personas",
        "Facilitación profesional",
        "Agenda de conversación estructurada"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Almuerzo Híbrido",
      description: "La evolución del networking que combina la calidez presencial con la amplitud digital, conectando profesionales sin límites geográficos.",
      icon: <Monitor className="w-8 h-8" />,
      features: [
        "Participación presencial y virtual",
        "Tecnología de conexión avanzada",
        "Breakout rooms dinámicos",
        "Grabación para miembros"
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const subscriptionPlans = [
    {
      name: "Bronce",
      price: "$300",
      period: "USD/mes",
      events: "4 almuerzos",
      description: "Perfecto para profesionales que inician su journey de networking",
      features: [
        "4 almuerzos de networking/mes",
        "Acceso a Meet & Greet",
        "Soporte por email",
        "Directorio de contactos básico"
      ],
      popular: false
    },
    {
      name: "Plata",
      price: "$600",
      period: "USD/mes",
      events: "8 almuerzos",
      description: "Ideal para empresarios que buscan ampliar su red profesional",
      features: [
        "8 almuerzos de networking/mes",
        "Acceso a todos los eventos",
        "Almuerzo híbrido incluido",
        "Soporte prioritario",
        "Directorio premium",
        "1 consultoría mensual"
      ],
      popular: true
    },
    {
      name: "Oro",
      price: "$1000",
      period: "USD/mes",
      events: "Ilimitados",
      description: "Para líderes que necesitan networking sin límites",
      features: [
        "Almuerzos ilimitados",
        "Eventos exclusivos VIP",
        "Almuerzo a medida personalizado",
        "Concierge service",
        "Directorio ejecutivo completo",
        "Consultoría ilimitada",
        "Acceso prioritario a TOP"
      ],
      popular: false
    },
    {
      name: "Platino",
      price: "$2000",
      period: "USD/mes",
      events: "Premium Ilimitado",
      description: "La experiencia de networking más exclusiva para CEOs y ejecutivos C-Level",
      features: [
        "Todo lo incluido en plan Oro",
        "Eventos exclusivos C-Level",
        "Mesa privada en eventos premium",
        "Matchmaking personalizado IA",
        "Consultoría estratégica 1:1",
        "Acceso a network internacional",
        "Personal branding premium",
        "Mentoría ejecutiva mensual"
      ],
      popular: false,
      premium: true
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 animate-pulse"></div>
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
            RistrEvents
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Redefine tu experiencia de networking con eventos que van más allá de las conexiones tradicionales. 
            Tres modalidades únicas para profesionales que buscan resultados extraordinarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => document.getElementById('modalidades')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explorar Modalidades
            </button>
            <button 
              onClick={() => document.getElementById('suscripciones')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Ver Suscripciones
            </button>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section id="modalidades" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Tres Modalidades Únicas
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cada modalidad diseñada para diferentes objetivos de networking, todas con el mismo estándar de excelencia.
            </p>
          </div>
          
          <div className="space-y-16">
            {eventTypes.map((event, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''}`}
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-yellow-400 bg-black/50 p-3 rounded-xl border border-gray-700">
                      {event.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {event.description}
                  </p>
                  <ul className="space-y-3">
                    {event.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="rounded-xl shadow-2xl border border-gray-700 w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section id="suscripciones" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Planes de Suscripción
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Elige la membresía que se adapte a tus objetivos profesionales y comienza a construir la red que transformará tu carrera.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-gray-900 border-2 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  plan.premium
                    ? 'border-purple-400 shadow-2xl shadow-purple-500/20 bg-gradient-to-b from-gray-900 to-purple-900/20'
                    : plan.popular 
                      ? 'border-yellow-400 shadow-2xl shadow-yellow-500/20' 
                      : selectedPlan === plan.name
                        ? 'border-yellow-400'
                        : 'border-gray-700 hover:border-yellow-400/50'
                }`}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {plan.premium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                      <Crown className="w-4 h-4" />
                      PREMIUM
                    </span>
                  </div>
                )}
                
                {plan.popular && !plan.premium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      MÁS POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.premium ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-4xl font-bold mb-2 ${
                    plan.premium 
                      ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
                      : 'bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent'
                  }`}>
                    {plan.price}
                  </div>
                  <p className="text-gray-400 mb-2">{plan.period}</p>
                  <p className={`font-semibold ${plan.premium ? 'text-purple-400' : 'text-yellow-400'}`}>
                    {plan.events}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <Check className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${plan.premium ? 'text-purple-400' : 'text-yellow-400'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                  plan.premium
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-400 hover:to-pink-400'
                    : plan.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400'
                      : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
                }`}>
                  {selectedPlan === plan.name ? 'Seleccionado' : 'Elegir Plan'}
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              ¿Necesitas un plan personalizado para tu empresa?
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 flex items-center gap-2 mx-auto">
              Contactar para Plan Empresarial
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Solidarity Action */}
      <section className="py-16 bg-gray-800 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-2xl font-bold text-white mb-4">Compromiso Social</h3>
          <p className="text-gray-400 mb-8">
            Cada suscripción contribuye a programas de emprendimiento social y desarrollo profesional para jóvenes.
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

export default RistrEvents;
