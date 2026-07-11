import CategoryCard from "../cards/CategoryCard";
import { CATEGORIES } from "@/data/categories";

export default function CategorySection() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Explore Categories
          </h2>

          <p className="text-gray-500">
            Pilih jalur belajar yang ingin kamu kuasai.
          </p>
        </div>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          View All
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </section>
  );
}