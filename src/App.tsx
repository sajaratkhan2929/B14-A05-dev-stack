import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import type { Tech } from "./types";

function App() {
  const [technologies, setTechnologies] = useState<Tech[]>([]);
  const [stack, setStack] = useState<Tech[]>([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  const handleAdd = (tech: Tech) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);
    if (alreadyAdded) {
      alert(`${tech.name} is already in your stack.`);
      return;
    }
    setStack([...stack, tech]);
  };

  return (
    <>
      <Navbar />
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore the <span className="text-pink-600">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              isAdded={stack.some((item) => item.id === tech.id)}
              onAdd={handleAdd}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;