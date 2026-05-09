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
    <section className="relative py-24 px-6 overflow-hidden" id="services">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,145,77,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">What I Do</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services & <span className="text-gradient">Solutions</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I offer a wide range of services to help you build, launch, and scale your digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
