import { Category } from "@/types/Category";

export default function CategoryCard({
  title,
  lessons,
  level,
  icon: Icon,
}: Category) {
  return (
    <div className="group rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg cursor-pointer">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
        <Icon className="h-7 w-7 text-blue-600" />
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-gray-500">
        {lessons} Materi
      </p>

      <span className="mt-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
        {level}
      </span>
    </div>
  );
}