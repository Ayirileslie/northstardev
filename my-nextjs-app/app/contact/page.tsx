import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-[#232931]">
      <section className="bg-[#232931] py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-[#00F0FF]">
            Ready to build something great? Let’s talk about your project.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <form className="grid gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#6C63FF] text-white py-3 px-6 rounded font-semibold hover:bg-[#574fd6] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="py-12 px-6 text-center text-sm text-gray-500">
        <p>
          Prefer direct email? Reach us at{' '}
          <a href="mailto:contact@devagency.com" className="text-[#6C63FF] underline">
            contact@devagency.com
          </a>
        </p>
      </section>
    </main>
  );
}
