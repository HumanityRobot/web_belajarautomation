import {
  LayoutDashboard,
  BookOpen,
  Map,
  FlaskConical,
  FolderKanban,
  Library,
  Newspaper,
  Briefcase,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r border-border bg-background text-foreground">
      <div className="p-6">
        <h1 className="text-xl font-bold">
          belajarautomation.id
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Learn QA Automation
        </p>
      </div>

      <nav className="space-y-2 px-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-accent">
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-accent">
          <BookOpen size={20} />
          Belajar
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-accent">
          <Map size={20} />
          Roadmap
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-accent">
          <FlaskConical size={20} />
          Playground
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-accent">
          <FolderKanban size={20} />
          Project
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-accent">
          <Library size={20} />
          Books
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-accent">
          <Newspaper size={20} />
          Blog
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-accent">
          <Briefcase size={20} />
          Career
        </button>
      </nav>
    </aside>
  );
}