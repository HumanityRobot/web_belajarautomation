import CategoryCard from "../cards/CategoryCard";
import { CATEGORIES } from "@/data/categories";

export default function CategorySection() {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Kategori Materi
        </h2>

        <button className="text-sm font-medium text-blue-600 hover:underline">
          Lihat Semua
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.id}
            {...category}
          />
        ))}
      </div>
    </section>
  );
}