import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-[#232931]">
      <section className="bg-[#232931] py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We Build Scalable Software Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[#00F0FF]">
            Custom Web, Mobile, and AI Applications for Startups and Enterprises.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-[#6C63FF] text-white px-6 py-3 rounded-2xl text-lg font-medium hover:bg-[#5a52d4] transition">
              Book a Free Consultation
            </Link>
            <Link href="/services" className="border border-[#6C63FF] text-[#6C63FF] px-6 py-3 rounded-2xl text-lg font-medium hover:bg-[#6C63FF]/10 transition">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-[#232931]">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow border border-[#E0E0E0]">
              <h3 className="text-xl font-semibold mb-2 text-[#6C63FF]">Expert Developers</h3>
              <p>Top-tier engineers skilled in the latest technologies.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-[#E0E0E0]">
              <h3 className="text-xl font-semibold mb-2 text-[#6C63FF]">End-to-End Support</h3>
              <p>From ideation to deployment and maintenance.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-[#E0E0E0]">
              <h3 className="text-xl font-semibold mb-2 text-[#6C63FF]">On-Time Delivery</h3>
              <p>We stick to deadlines and keep communication clear.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#6C63FF]/10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-[#232931]">Ready to bring your idea to life?</h2>
          <p className="text-lg mb-6 text-[#232931]">
            Let's work together to build something great. Whether it's an MVP or an enterprise platform, we've got you covered.
          </p>
          <Link href="/contact" className="bg-[#6C63FF] text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-[#5a52d4] transition">
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
