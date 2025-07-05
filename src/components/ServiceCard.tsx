
import { Star, User, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    provider: string;
    providerTitle: string;
    price: string;
    rating: number;
    reviews: number;
    category: string;
    image: string;
    featured?: boolean;
  };
  onAction: () => void;
  isAuthenticated: boolean;
}

const ServiceCard = ({ service, onAction, isAuthenticated }: ServiceCardProps) => {
  return (
    <div className="bg-black/50 border border-gray-700 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 group">
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        {service.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Star className="w-3 h-3" />
              DESTACADO
            </span>
          </div>
        )}
        <div className="absolute bottom-4 right-4">
          <span className="bg-black/80 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
          precio publico 
            {service.price}
          </span>
          <span className="bg-black/80 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
          precio Ristretto 20% OFF
          </span>
        </div>
      </div>

      {/* Service Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
          {service.description}
        </p>

        {/* Provider Info */}
        <div className="flex items-center mb-4 pb-4 border-b border-gray-700">
          <div className="bg-gray-700 rounded-full p-2 mr-3">
            <User className="w-4 h-4 text-gray-300" />
          </div>
          <div>
            <div className="text-white font-semibold text-sm">{service.provider}</div>
            <div className="text-gray-400 text-xs">{service.providerTitle}</div>
          </div>
        </div>

        {/* Rating and Reviews */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${
                    i < Math.floor(service.rating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-600'
                  }`} 
                />
              ))}
            </div>
            <span className="text-white text-sm font-semibold">{service.rating}</span>
            <span className="text-gray-400 text-xs">({service.reviews} reseñas)</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onAction}
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            isAuthenticated
              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400'
              : 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black'
          }`}
        >
          {isAuthenticated ? 'Contratar Servicio' : 'Regístrate para Comprar'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
