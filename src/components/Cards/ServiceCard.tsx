type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="glass group relative overflow-hidden rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
