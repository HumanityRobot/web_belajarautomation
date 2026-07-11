import { BookOpen, FileText } from "lucide-react";
import { Book } from "@/types/book";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="group rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-44 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-950">
        <BookOpen className="h-14 w-14 text-blue-600 dark:text-blue-400" />
      </div>

      <div className="mt-5">
        <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
          {book.category}
        </span>

        <h3 className="mt-2 text-lg font-semibold">
          {book.title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {book.description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <FileText size={16} />
          {book.pages} halaman
        </div>
      </div>
    </div>
  );
}