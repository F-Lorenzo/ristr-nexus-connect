
interface AdZoneProps {
  title: string;
  size: 'banner' | 'square' | 'rectangle';
  position?: string;
}

const AdZone = ({ title, size, position }: AdZoneProps) => {
  const sizeClasses = {
    banner: 'h-24 md:h-32',
    square: 'h-64 w-64',
    rectangle: 'h-48 md:h-64'
  };

  return (
    <div className={`bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg ${sizeClasses[size]} flex items-center justify-center transition-all duration-300 hover:border-yellow-400/50 hover:bg-gray-700/50`}>
      <div className="text-center">
        <div className="text-gray-400 text-sm font-medium mb-2">ZONA PUBLICITARIA</div>
        <div className="text-yellow-400 font-semibold">{title}</div>
        {position && <div className="text-gray-500 text-xs mt-1">{position}</div>}
      </div>
    </div>
  );
};

export default AdZone;
