import ServiceCard from "../Cards/ServiceCard";

export default function Services() {
  const services = [
  {
    icon: "💻",
    title: "Front-End Development",
    description:
      "Responsive web design using React & Next.js for fast, SEO-friendly, and visually appealing websites.",
  },
  {
    icon: "🖥️",
    title: "Back-End Development",
    description:
      "Secure and scalable server-side solutions with Node.js, Express, and REST APIs for robust performance.",
  },
  {
    icon: "🌐",
    title: "Full-Stack Development",
    description:
      "Complete web development solutions integrating front-end and back-end for dynamic applications.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Creating intuitive Figma designs for exceptional user experience and modern visual appeal.",
  },
  {
    icon: "🚀",
    title: "MVP Development",
    description:
      "Rapid Minimum Viable Product (MVP) development for startups to validate ideas quickly and cost-effectively.",
  },
  {
    icon: "🛒",
    title: "E-Commerce Development",
    description:
      "Custom online store development with payment integration, inventory, and SEO optimization.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile app solutions for iOS and Android using React Native.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Improving speed, SEO, and responsiveness for higher search rankings and better UX.",
  },
  {
    icon: "🔒",
    title: "Website Maintenance & Support",
    description:
      "Regular updates, security monitoring, and bug fixes to keep your website secure and efficient.",
  },
  {
    icon: "🤝",
    title: "Freelancing Services",
    description:
      "Affordable custom development solutions for startups and small businesses.",
  },
];


  return (
    <section className="bg-[#1F1B1A] py-16 px-6" id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Services I Offer
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          I provide end-to-end web solutions for businesses, startups, and individuals.
        </p>
      </div>

      {/* Dynamic Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
