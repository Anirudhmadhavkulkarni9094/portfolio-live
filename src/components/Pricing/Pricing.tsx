export default function Pricing() {
  return (
    <section className="bg-[#1F1B1A] py-16 px-6" id="pricing">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Pricing Plans</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Choose a plan that fits your project requirements. No hidden charges, 100% transparency.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <div className="border border-gray-700 bg-[#2A2524] p-8 rounded-xl hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-white mb-4">Basic</h3>
          <p className="text-4xl font-extrabold text-[#FF914D] mb-4">$99</p>
          <ul className="text-gray-400 space-y-3 mb-6">
            <li>✔ 1 Landing Page</li>
            <li>✔ Responsive Design</li>
            <li>✔ Basic SEO Setup</li>
            <li>✖ No CMS Integration</li>
          </ul>
          <button className="w-full bg-[#FF914D] text-white py-3 rounded-md hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>

        {/* Standard Plan (Highlighted) */}
        <div className="border-2 border-[#FF914D] bg-[#2A2524] p-8 rounded-xl shadow-xl hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-white mb-4">Standard</h3>
          <p className="text-4xl font-extrabold text-[#FF914D] mb-4">$299</p>
          <ul className="text-gray-400 space-y-3 mb-6">
            <li>✔ 5 Pages Website</li>
            <li>✔ Responsive Design</li>
            <li>✔ SEO Optimization</li>
            <li>✔ CMS Integration</li>
          </ul>
          <button className="w-full bg-[#FF914D] text-white py-3 rounded-md hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>

        {/* Premium Plan */}
        <div className="border border-gray-700 bg-[#2A2524] p-8 rounded-xl hover:scale-105 transition-transform">
          <h3 className="text-xl font-bold text-white mb-4">Premium</h3>
          <p className="text-4xl font-extrabold text-[#FF914D] mb-4">$499</p>
          <ul className="text-gray-400 space-y-3 mb-6">
            <li>✔ Unlimited Pages</li>
            <li>✔ Custom Features</li>
            <li>✔ SEO + Analytics</li>
            <li>✔ Priority Support</li>
          </ul>
          <button className="w-full bg-[#FF914D] text-white py-3 rounded-md hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
