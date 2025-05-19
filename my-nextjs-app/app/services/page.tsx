import React from "react";
import Link from "next/link";

export default function Services() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-[#232931]">
      <section className="bg-[#232931] py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-[#00F0FF]">
            From innovative startups to enterprise solutions — we’ve got you covered.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow border border-[#E0E0E0]">
            <h2 className="text-xl font-bold text-[#6C63FF] mb-2">Custom Web Development</h2>
            <p>
              Build high-performance, responsive web applications tailored to your unique business needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-[#E0E0E0]">
            <h2 className="text-xl font-bold text-[#6C63FF] mb-2">Mobile App Development</h2>
            <p>
              Native and cross-platform mobile apps for iOS and Android that scale and engage users.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-[#E0E0E0]">
            <h2 className="text-xl font-bold text-[#6C63FF] mb-2">AI & Machine Learning</h2>
            <p>
              Integrate intelligent systems into your business using NLP, computer vision, and predictive analytics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-[#E0E0E0]">
            <h2 className="text-xl font-bold text-[#6C63FF] mb-2">SaaS Product Development</h2>
            <p>
              Launch scalable SaaS platforms with subscription models, user roles, and analytics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-[#E0E0E0]">
            <h2 className="text-xl font-bold text-[#6C63FF] mb-2">Startup MVPs</h2>
            <p>
              Validate your startup idea fast with lean MVPs built for growth and feedback.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-[#E0E0E0]">
            <h2 className="text-xl font-bold text-[#6C63FF] mb-2">Maintenance & Support</h2>
            <p>
              Reliable ongoing support and feature expansion to keep your software evolving.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#6C63FF]/10 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#232931] mb-4">
            Not sure where to start?
          </h2>
          <p className="text-lg mb-6 text-[#232931]">
            Let’s talk about your project. We’ll help you pick the right tech stack and strategy.
          </p>
          <Link href="/contact" className="bg-[#6C63FF] text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-[#5a52d4] transition">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
