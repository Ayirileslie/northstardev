import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-[#F5F5F5] text-[#232931]">
      <section className="bg-[#232931] py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl text-[#00F0FF]">
            Building future-forward digital products with precision, passion, and purpose.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#6C63FF] mb-4">Who We Are</h2>
            <p className="mb-4">
              We are a team of engineers, designers, and innovators with a mission to craft custom
              software solutions for startups and enterprises. With a focus on usability,
              performance, and scale, we empower businesses through technology.
            </p>
            <p>
              From ideation to deployment, we partner with clients to turn bold ideas into
              high-impact products that users love.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-[#E0E0E0]">
            <img
              src="/about/png2.jpg"
              alt="Team of developers collaborating"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#6C63FF]/10 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-3xl font-bold text-[#6C63FF]">5+</h3>
            <p className="text-[#232931]">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#6C63FF]">40+</h3>
            <p className="text-[#232931]">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[#6C63FF]">20+</h3>
            <p className="text-[#232931]">Global Clients</p>
          </div>
        </div>
      </section>
    </main>
  );
}
