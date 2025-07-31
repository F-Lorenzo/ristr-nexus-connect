import { useState } from 'react';
import Layout from '../components/Layout';
import { Check, Crown, Star, Zap, Shield, Users, Award, ArrowRight } from 'lucide-react';

const Membresias = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const plans = [
    {
      id: 'basic',
      name: 'Básico',
      price: '$9.99',
      period: '/mes',
      description: 'Perfecto para emprendedores que están comenzando',
      icon: Shield,
      color: 'from-gray-400 to-gray-600',
      popular: false,
      features: [
        'Acceso a cursos básicos',
        'Networking básico',
        'Soporte por email',
        'Certificados digitales',
        'Acceso a 3 eventos al mes',
        'Recursos descargables'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$24.99',
      period: '/mes',
      description: 'La elección más popular para profesionales ambiciosos',
      icon: Crown,
      color: 'from-yellow-400 to-orange-500',
      popular: true,
      features: [
        'Todo lo incluido en Básico',
        'Acceso completo a todos los cursos',
        'Networking premium exclusivo',
        'Soporte prioritario 24/7',
        'Mentorías mensuales',
        'Acceso ilimitado a eventos',
        'Certificaciones profesionales',
        'Descuentos en consultoría',
        'Grupos privados de expertos'
      ]
    },
    {
      id: 'enterprise',
      name: 'Empresarial',
      price: '$49.99',
      period: '/mes',
      description: 'Solución completa para equipos y organizaciones',
      icon: Star,
      color: 'from-purple-400 to-pink-500',
      popular: false,
      features: [
        'Todo lo incluido en Premium',
        'Acceso para equipo completo',
        'Cursos personalizados',
        'Consultoría estratégica incluida',
        'Eventos corporativos exclusivos',
        'Dashboard de analytics',
        'Integración con herramientas empresariales',
        'Gerente de cuenta dedicado',
        'Formación a medida',
        'Reportes detallados de progreso'
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Acceso Inmediato',
      description: 'Comienza a disfrutar de todos los beneficios desde el primer día'
    },
    {
      icon: Users,
      title: 'Comunidad Exclusiva',
      description: 'Conecta con profesionales de alto nivel en tu industria'
    },
    {
      icon: Award,
      title: 'Certificaciones Reconocidas',
      description: 'Obtén credenciales valoradas por las mejores empresas'
    }
  ];

  const faqs = [
    {
      question: '¿Puedo cambiar mi plan en cualquier momento?',
      answer: 'Sí, puedes upgradearte o downgradearte cuando quieras. Los cambios se aplicarán en tu próximo ciclo de facturación.'
    },
    {
      question: '¿Ofrecen garantía de devolución?',
      answer: 'Ofrecemos una garantía de 30 días. Si no estás satisfecho, te devolvemos el 100% de tu dinero.'
    },
    {
      question: '¿Los precios incluyen todos los impuestos?',
      answer: 'Los precios mostrados no incluyen impuestos. Los impuestos aplicables se calcularán durante el checkout.'
    },
    {
      question: '¿Hay descuentos para pagos anuales?',
      answer: 'Sí, ofrecemos un 20% de descuento cuando pagas anualmente. Contacta a nuestro equipo para más detalles.'
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-20 pb-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Membresías Premium
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Desbloquea tu potencial profesional con acceso completo a nuestra plataforma de networking, 
            cursos especializados y eventos exclusivos.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="flex items-center bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <IconComponent className="w-6 h-6 text-yellow-400 mr-3" />
                  <div className="text-left">
                    <h3 className="text-white font-semibold">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Elige tu plan perfecto</h2>
            <p className="text-gray-300">Todos los planes incluyen acceso a nuestra comunidad y soporte básico</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <div 
                  key={plan.id}
                  className={`relative bg-gray-800 rounded-2xl p-8 border-2 transition-all duration-300 cursor-pointer ${
                    selectedPlan === plan.id 
                      ? 'border-yellow-400 transform scale-105 shadow-2xl shadow-yellow-500/20' 
                      : 'border-gray-700 hover:border-gray-600'
                  } ${plan.popular ? 'md:scale-110' : ''}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                        MÁS POPULAR
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${plan.color} mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      selectedPlan === plan.id
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Plan Seleccionado' : 'Seleccionar Plan'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 transform hover:scale-105">
              Comenzar Ahora - {plans.find(p => p.id === selectedPlan)?.price}/mes
            </button>
            <p className="text-gray-400 mt-4">Sin compromisos a largo plazo • Cancela cuando quieras</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h3 className="text-white font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border-t border-yellow-400/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para acelerar tu carrera?</h2>
          <p className="text-gray-300 mb-8">
            Únete a miles de profesionales que ya están transformando sus carreras con nuestras membresías premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-200">
              Comenzar Prueba Gratuita
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-all duration-200">
              Hablar con Ventas
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Membresias;