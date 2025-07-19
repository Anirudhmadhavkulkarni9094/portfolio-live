"use client";
import { useState } from "react";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });
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
    <section id="contact" className="bg-[#1F1B1A] min-h-screen flex items-center justify-center px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold mb-4">Get a Quote</h2>
          <p className="text-gray-400 mb-6">
            Fill out the form and receive your estimate within 24 hours.
          </p>
        </div>

        {/* Right Section: Form */}
        <div className="bg-[#2A2524] p-8 rounded-lg shadow-lg">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              className="w-full px-4 py-3 bg-[#1F1B1A] text-white rounded-md border border-gray-600 focus:border-[#FF914D] outline-none"
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              className="w-full px-4 py-3 bg-[#1F1B1A] text-white rounded-md border border-gray-600 focus:border-[#FF914D] outline-none"
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              className="w-full px-4 py-3 bg-[#1F1B1A] text-white rounded-md border border-gray-600 focus:border-[#FF914D] outline-none"
              onChange={handleChange}
              required
            />
            <textarea
              name="details"
              placeholder="Project Requirements"
              value={formData.details}
              className="w-full px-4 py-3 bg-[#1F1B1A] text-white rounded-md border border-gray-600 focus:border-[#FF914D] outline-none h-32"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              disabled={loading || disabled}
              className={`w-full py-3 rounded-md font-semibold transition ${
                disabled ? "bg-gray-500 cursor-not-allowed" : "bg-[#FF914D] text-white hover:bg-orange-600"
              }`}
            >
              {loading ? "Sending..." : "Request Quote"}
            </button>
            {message && <p className="text-gray-400 mt-3">{message}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
