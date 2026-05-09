"use client";
import React from 'react';
import { Check, Zap, Globe, Search, Layout, Code, Smartphone, Clock, ShieldCheck, ArrowRight, Star } from 'lucide-react';

const trustBuilders = [
  { icon: Smartphone, text: "100% Responsive" },
  { icon: Code, text: "Modern Tech Stack" },
  { icon: Search, text: "SEO Friendly" },
  { icon: Zap, text: "Fast Performance" }
];

const plans = [
  {
    name: "Starter",
    price: "199",
    description: "Perfect for personal brands and simple launches.",
    timeline: "3 Days Delivery",
    features: [
      "1 High-Converting Landing Page",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Fast Delivery",
      "Email Support"
    ],
    cta: "Start Your Project",
    popular: false,
    gradient: "from-slate-800 to-slate-900"
  },
  {
    name: "Growth",
    price: "399",
    description: "Best for growing startups and professional businesses.",
    timeline: "7 Days Delivery",
    features: [
      "Up to 5 Pages Website",
      "Premium Responsive Design",
      "Advanced SEO Optimization",
      "CMS Integration (Contentful/Sanity)",
      "Performance Optimization",
      "Priority WhatsApp/Email Support"
    ],
    cta: "Book a Call",
    popular: true,
    gradient: "from-primary/20 via-primary/5 to-transparent"
  },
  {
    name: "Scale",
    price: "999",
    isStartingAt: true,
    description: "Custom solutions for complex, high-scale applications.",
    timeline: "14+ Days Delivery",
    features: [
      "Unlimited Informational Pages",
      "Custom Complex Features",
      "Advanced SEO + Analytics",
      "API & Third-party Integrations",
      "Priority 24/7 Support",
      "Custom Scalable Architecture",
      "Post-Launch Maintenance"
    ],
    cta: "Start Your Project",
    popular: false,
    gradient: "from-slate-800 to-slate-900"
  }
];

export default function Pricing() {
  return (
    <section className="relative py-32 px-6 overflow-hidden" id="pricing">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Pricing & Plans</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Ready to <span className="text-gradient">Scale?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
            Choose a plan that fits your ambition. No hidden costs, just world-class engineering delivered at startup speed.
          </p>
        </div>

        {/* Trust Builders */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-24 opacity-60">
          {trustBuilders.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-white text-sm font-bold uppercase tracking-widest">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative flex flex-col group transition-all duration-500 hover:-translate-y-4 ${
                plan.popular ? 'z-20 scale-105 lg:scale-110' : 'z-10'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-2xl shadow-primary/40 flex items-center gap-2">
                    <Zap className="w-3 h-3 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card Container */}
              <div className={`flex flex-col h-full rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 border overflow-hidden ${
                plan.popular 
                  ? 'bg-slate-900/80 border-primary/40 shadow-[0_0_50px_-12px_rgba(255,145,77,0.3)] backdrop-blur-xl' 
                  : 'bg-white/[0.03] border-white/10 hover:border-white/20 backdrop-blur-md'
              }`}>
                {/* Header */}
                <div className="mb-10">
                  <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-primary' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    {plan.isStartingAt && <span className="text-gray-500 text-sm font-bold uppercase">Starting at</span>}
                    <span className="text-5xl font-black text-white">${plan.price}</span>
                    <span className="text-gray-500 text-sm font-bold uppercase">/project</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest bg-white/5 w-fit px-3 py-1.5 rounded-lg border border-white/5">
                    <Clock className="w-3.5 h-3.5" />
                    {plan.timeline}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-5 mb-12 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                        plan.popular ? 'bg-primary/20 text-primary' : 'bg-white/10 text-gray-400 group-hover/item:text-primary'
                      }`}>
                        <Check className="w-3 h-3 stroke-[3px]" />
                      </div>
                      <span className="text-gray-300 text-sm font-medium leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={`/?plan=${plan.name}#contact`}
                  className={`relative group/btn flex items-center justify-center gap-3 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all duration-300 overflow-hidden ${
                    plan.popular 
                      ? 'bg-primary text-white hover:bg-primary-hover shadow-xl shadow-primary/20 hover:shadow-primary/40' 
                      : 'glass text-white hover:bg-white/5 border-white/10'
                  }`}
                >
                  <span className="relative z-10">{plan.cta}</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                  
                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite] transition-transform" />
                </a>
              </div>

              {/* Decorative Glow */}
              {plan.popular && (
                <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Guarantee */}
        <div className="mt-24 text-center">
          <div className="glass inline-flex items-center gap-6 px-8 py-4 rounded-3xl border-white/5">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f172a] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-gray-400">
                  {i}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm font-medium">
              Join <span className="text-white font-bold">20+ businesses</span> scaling with my services.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
