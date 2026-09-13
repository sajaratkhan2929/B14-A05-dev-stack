import type { Tech } from "../types";

interface Props {
  tech: Tech;
  isAdded: boolean;
  onAdd: (tech: Tech) => void;
}

function TechCard({ tech, isAdded, onAdd }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-3 font-semibold text-gray-900">{tech.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{tech.description}</p>

      <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
        <span className="bg-gray-100 px-2 py-1 rounded-full">{tech.category}</span>
        <span className="bg-gray-100 px-2 py-1 rounded-full">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1">
          ⭐ {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-4 w-full py-2 rounded-lg text-sm font-medium ${
          isAdded
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-gray-900 text-white"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechCard;