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
    <aside className="w-64 border-r h-screen bg-white">
      <div className="p-6">
        <h1 className="text-xl font-bold">
          belajarautomation.id
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Learn QA Automation
        </p>
      </div>

      <nav className="px-4 space-y-2">

        <button className="flex items-center gap-3 w-full rounded-xl px-4 py-3 hover:bg-gray-100">
          <LayoutDashboard size={20}/>
          Dashboard
        </button>

        <button className="flex items-center gap-3 w-full rounded-xl px-4 py-3 hover:bg-gray-100">
          <BookOpen size={20}/>
          Belajar
        </button>

        <button className="flex items-center gap-3 w-full rounded-xl px-4 py-3 hover:bg-gray-100">
          <Map size={20}/>
          Roadmap
        </button>

        <button className="flex items-center gap-3 w-full rounded-xl px-4 py-3 hover:bg-gray-100">
          <FlaskConical size={20}/>
          Playground
        </button>

        <button className="flex items-center gap-3 w-full rounded-xl px-4 py-3 hover:bg-gray-100">
          <FolderKanban size={20}/>
          Project
        </button>

        <button className="flex items-center gap-3 w-full rounded-xl px-4 py-3 hover:bg-gray-100">
          <Library size={20}/>
          Books
        </button>

        <button className="flex items-center gap-3 w-full rounded-xl px-4 py-3 hover:bg-gray-100">
          <Newspaper size={20}/>
          Blog
        </button>

        <button className="flex items-center gap-3 w-full rounded-xl px-4 py-3 hover:bg-gray-100">
          <Briefcase size={20}/>
          Career
        </button>

      </nav>
    </aside>
  );
}