"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const menuItems = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Belajar",
    href: "/learn",
    icon: BookOpen,
  },
  {
    label: "Roadmap",
    href: "/roadmap",
    icon: Map,
  },
  {
    label: "Playground",
    href: "/playground",
    icon: FlaskConical,
  },
  {
    label: "Project",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    label: "Books",
    href: "/books",
    icon: Library,
  },
  {
    label: "Blog",
    href: "/blog",
    icon: Newspaper,
  },
  {
    label: "Career",
    href: "/career",
    icon: Briefcase,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

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
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex w-full items-center gap-3 rounded-xl px-4 py-3
                transition-colors
                ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }
              `}
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}