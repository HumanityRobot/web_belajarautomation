import { BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function ContinueLearningCard() {
  const progress = 60;

  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-2">
        <BookOpen className="text-blue-600" size={20} />
        <h2 className="font-semibold text-lg">
          Continue Learning
        </h2>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold">
          Playwright Locator
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Learn XPath, CSS Selector, Text Locator,
          Role Locator, dan Best Practice.
        </p>
      </div>

      <Progress
        value={progress}
        className="mt-6"
      />

      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock size={16} />
          15 min
        </div>

        <span>Lesson 5 / 8</span>
      </div>

      <Button className="mt-6 w-full rounded-xl">
        Continue Learning
      </Button>
    </div>
  );
}