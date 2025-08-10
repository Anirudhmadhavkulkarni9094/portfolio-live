'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
type Category = {
  id: number;
  label: string;
  slug: string;
  value: string | null;
};

const mockCategories: Category[] = [
  {
    id: 1,
    label: "Technology",
    slug: "AI",
    value: "AI",
  },
  {
    id: 2,
    label: "Health",
    slug: "AI",
    value: "AI",
  },
  {
    id: 3,
    label: "Cloud",
    slug: "Cloud",
    value: "Cloud",
  },
  {
    id: 4,
    label: "DSA",
    slug: "DSA",
    value: "DSA",
  },
];

function Navbar() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Simulating data fetch
    axios.get('/api/blog').then(response => {
      setCategories(mockCategories);
      console.log("Fetched categories:", response.data.data);
    }).catch(error => {
      console.error("Error fetching categories:", error); 
    });
    console.log("Using mock categories:", mockCategories);
  }, []);

  return (
    <div className=" py-4 px-6 shadow-md">
  <nav className="max-w-7xl mx-auto flex justify-center items-center">
    <ul className="flex gap-6 justify-center">
      {categories.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.slug}`}
            className="text-white hover:text-[#FF914D] text-base font-medium transition duration-200"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
</div>
  );
}

export default Navbar;
