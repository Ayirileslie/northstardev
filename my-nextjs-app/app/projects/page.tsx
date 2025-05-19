"use client";

import React, { useState } from "react";
import FilterButtons from "../components/FilterButtons";

const projects = [
  {
    title: "AI Chatbot Platform",
    description: "A scalable chatbot solution for enterprise support, built with GPT-4 and deployed on AWS.",
    image: "/projects/chatbot.jpg",
    category: "AI",
  },
  {
    title: "Mobile Banking App",
    description: "A secure and intuitive mobile banking experience for a fintech startup.",
    image: "/projects/banking.jpg",
    category: "Mobile",
  },
  {
    title: "Healthcare Dashboard",
    description: "A real-time patient analytics dashboard used by clinicians across 10+ hospitals.",
    image: "/projects/healthcare.jpg",
    category: "Web",
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "AI", "Web", "Mobile"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#F5F5F5] text-[#232931]">
      {/* Hero Section */}
      <section className="bg-[#232931] py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg text-[#00F0FF]">
            Showcasing innovative work we've done for clients across industries.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <FilterButtons
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Projects Grid */}
      <section className="py-10 px-6">
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500">No projects found in this category.</p>
        )}

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#6C63FF] mb-2">{project.title}</h2>
                <p className="text-sm text-[#232931]">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
