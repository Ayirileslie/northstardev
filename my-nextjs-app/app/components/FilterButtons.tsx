"use client";

import React from "react";

export default function FilterButtons({ categories, selectedCategory, onSelect }) {
  return (
    <section className="py-10 px-6 text-center bg-[#F5F5F5]">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`mx-2 mb-4 px-5 py-2 rounded font-semibold transition
            ${
              selectedCategory === cat
                ? "bg-[#6C63FF] text-white shadow-lg"
                : "bg-white text-[#6C63FF] border border-[#6C63FF] hover:bg-[#6C63FF] hover:text-white"
            }
          `}
        >
          {cat}
        </button>
      ))}
    </section>
  );
}
