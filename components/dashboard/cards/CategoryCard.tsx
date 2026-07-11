import { Category } from "@/types/Category";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <div
      className="
        group
        rounded-3xl
        border
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        cursor-pointer
      "
    >
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-blue-100 p-3">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>

        <ChevronRight className="h-5 w-5 text-gray-400 transition group-hover:translate-x-1" />
      </div>

      <h3 className="mt-5 text-lg font-semibold">
        {category.title}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {category.lessons} Lessons
      </p>

      <span className="mt-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
        {category.level}
      </span>
    </div>
  );
}