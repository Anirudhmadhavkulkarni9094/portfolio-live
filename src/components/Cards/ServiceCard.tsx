type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-[#2A2524] p-8 rounded-lg shadow-lg border border-gray-700 hover:border-[#FF914D] transition">
      <div className="text-[#FF914D] text-4xl mb-4">{icon}</div>
      <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
