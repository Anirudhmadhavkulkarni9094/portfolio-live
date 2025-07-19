export default function GetQuote() {
  return (
    <section id="contact" className="bg-[#1F1B1A] min-h-screen flex items-center justify-center px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Left Section: Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold mb-4">Get a Quote</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Got a custom project in mind? Fill out the form below and we’ll provide you
            with an accurate estimate and timeline within 24 hours.
          </p>
          <ul className="text-gray-400 space-y-2 mb-8">
            <li>✔ Quick response within 24 hours</li>
            <li>✔ Tailored solutions for your business</li>
            <li>✔ 100% transparency in pricing</li>
          </ul>
        </div>

        {/* Right Section: Quote Form */}
        <div className="bg-[#2A2524] p-8 rounded-lg shadow-lg">
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-semibold">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-[#1F1B1A] text-white rounded-md border border-gray-600 focus:border-[#FF914D] outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full px-4 py-3 bg-[#1F1B1A] text-white rounded-md border border-gray-600 focus:border-[#FF914D] outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-semibold">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 bg-[#1F1B1A] text-white rounded-md border border-gray-600 focus:border-[#FF914D] outline-none"
              />
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm font-semibold">Project Requirements</label>
              <textarea
                placeholder="Describe your project..."
                className="w-full px-4 py-3 bg-[#1F1B1A] text-white rounded-md border border-gray-600 focus:border-[#FF914D] outline-none h-32"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#FF914D] text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition"
            >
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
