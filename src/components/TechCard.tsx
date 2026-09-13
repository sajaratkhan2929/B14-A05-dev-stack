import type { Tech } from "../types";

interface Props {
  tech: Tech;
  isAdded: boolean;
  onAdd: (tech: Tech) => void;
}

const badgeColors: Record<string, string> = {
  Frontend: "bg-blue-50 text-blue-600",
  Backend: "bg-green-50 text-green-600",
  Database: "bg-blue-50 text-blue-600",
  Language: "bg-green-50 text-green-600",
  Styling: "bg-green-50 text-green-600",
  DevOps: "bg-blue-50 text-orange-600",
};

function TechCard({ tech, isAdded, onAdd }: Props) {
  const badgeColor = badgeColors[tech.category] || "bg-gray-100 text-gray-600";

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
        <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${badgeColor}`}>
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-gray-900">{tech.name}</h3>
      <p className="mt-2 text-sm text-gray-500 leading-relaxed">{tech.description}</p>

    <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2 text-sm text-gray-500">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">{tech.category}</span>
        <span className="text-xs">{tech.difficulty}</span>
                <span className="flex items-center gap-1 text-gray-900 font-medium">
          <span className="text-yellow-400">★</span> {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full py-3 rounded-xl text-sm font-medium ${
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