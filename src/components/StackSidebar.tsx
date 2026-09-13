import type { Tech } from "../types";

interface Props {
  stack: Tech[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function StackSidebar({ stack, onRemove, onRemoveAll }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 h-fit">
      <h3 className="font-semibold text-gray-900">Your Stack</h3>

      {stack.length === 0 ? (
        <>
          <p className="text-sm text-gray-500 mt-1">No technologies selected yet.</p>
          <div className="mt-4 border border-dashed border-gray-300 rounded-lg py-6 text-center text-sm text-gray-400">
            Your stack is empty.
          </div>
        </>
      ) : (
        <>
          <p className="text-sm text-gray-500 mt-1">
            {stack.length} Technology Selected
          </p>

          <div className="mt-4 flex flex-col gap-2">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 border border-gray-200 rounded-lg p-2"
              >
                <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{tech.name}</p>
                  <p className="text-xs text-gray-500">{tech.category}</p>
                </div>
                <button
                  onClick={() => onRemove(tech.id)}
                  className="text-gray-400 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-4 w-full border border-red-200 text-red-500 py-2 rounded-lg text-sm font-medium"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}

export default StackSidebar;