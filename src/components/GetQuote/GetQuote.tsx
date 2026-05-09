"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });

  useEffect(() => {
    const plan = searchParams.get("plan");
    if (plan) {
      setFormData(prev => ({
        ...prev,
        details: `I am interested in the ${plan} plan. Please provide more details.`
      }));
    }
  }, [searchParams]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false); // Prevent multiple submissions

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (disabled) return; // If button is disabled, do nothing

    setLoading(true);
    setDisabled(true); // Disable button immediately
    setMessage("");

    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setMessage(data.message);

      if (res.ok) {
        // ✅ Reset form after success
        setFormData({ name: "", email: "", phone: "", details: "" });
      }

      // Re-enable after 5 seconds (optional)
      setTimeout(() => setDisabled(false), 5000);

    } catch (err) {
      setMessage("Something went wrong. Try again!");
      setDisabled(false); // Allow retry on failure
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-24 px-6 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(255,145,77,0.05)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section */}
          <div className="max-w-xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Let&apos;s build something <span className="text-gradient">extraordinary</span> together.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Ready to take your digital presence to the next level? Fill out the form and I&apos;ll get back to you with a custom quote within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Email</p>
                  <p className="text-white font-medium">anirudh.kulkarni.dev@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-bold uppercase tracking-wider">Location</p>
                  <p className="text-white font-medium">Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="glass rounded-[2.5rem] p-8 sm:p-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white rounded-2xl focus:border-primary outline-none transition-all"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white rounded-2xl focus:border-primary outline-none transition-all"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white rounded-2xl focus:border-primary outline-none transition-all"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest ml-1">Project Details</label>
                <textarea
                  name="details"
                  placeholder="Tell me about your project..."
                  value={formData.details}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 text-white rounded-2xl focus:border-primary outline-none h-40 resize-none transition-all"
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading || disabled}
                className={`w-full py-5 rounded-2xl font-bold transition-all duration-300 ${
                  disabled 
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                    : "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
                }`}
              >
                {loading ? "Sending..." : "Request a Quote"}
              </button>
              {message && (
                <div className={`text-center p-4 rounded-xl text-sm font-medium ${message.includes("wrong") ? "bg-red-500/10 text-red-400" : "bg-green-500/10 text-green-400"}`}>
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GetQuote() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}
