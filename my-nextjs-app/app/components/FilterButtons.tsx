import React from "react";

type FilterButtonsProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

export default function FilterButtons({
  categories,
  selectedCategory,
  onSelect,
}: FilterButtonsProps) {
  return (
    <section className="py-10 px-6 text-center bg-[#F5F5F5]">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`mx-2 px-4 py-2 rounded ${
            selectedCategory === category
              ? "bg-[#6C63FF] text-white"
              : "bg-white text-[#6C63FF] border border-[#6C63FF]"
          }`}
        >
          {category}
        </button>
      ))}
    </section>
  );
}
