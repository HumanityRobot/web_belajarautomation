import { CheckCircle2, Circle, PlayCircle } from "lucide-react";
import { ROADMAP_ITEMS } from "../../data/roadmap";

const renderIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;

    case "current":
      return <PlayCircle className="h-5 w-5 text-blue-500" />;

    default:
      return <Circle className="h-5 w-5 text-gray-300" />;
  }
};

export default function RoadmapCard() {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Roadmap Kamu
        </h2>

        <button className="text-sm text-blue-600 hover:underline">
          Lihat Semua
        </button>
      </div>

      <div className="space-y-5">
        {ROADMAP_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3"
          >
            {renderIcon(item.status)}

            <span
              className={`text-sm ${
                item.status === "locked"
                  ? "text-gray-400"
                  : "text-gray-700"
              }`}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}