"use client";

import { Bell, Menu, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background px-6">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 transition-colors hover:bg-accent">
          <Menu size={20} />
        </button>

        <div className="relative w-[420px]">
          <Search
            size={18}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
          />

          <Input
            placeholder="Cari materi, roadmap, artikel..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 transition-colors hover:bg-accent"
          aria-label="Toggle Theme"
        >
          {resolvedTheme === "dark" ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </button>

        {/* Notification */}
        <button className="relative rounded-lg p-2 transition-colors hover:bg-accent">
          <Bell size={20} />

          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
        </button>

        {/* User */}
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>

          <div className="hidden md:block">
            <p className="text-sm font-semibold text-foreground">
              Aril
            </p>

            <p className="text-xs text-muted-foreground">
              Free Plan
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}