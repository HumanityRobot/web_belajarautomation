import { Bell, Menu, Moon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-white px-6">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 hover:bg-gray-100 transition">
          <Menu size={20} />
        </button>

        <div className="relative w-[420px]">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <Input
            placeholder="Cari materi, roadmap, artikel..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <button className="rounded-lg p-2 hover:bg-gray-100 transition">
          <Moon size={20} />
        </button>

        <button className="relative rounded-lg p-2 hover:bg-gray-100 transition">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-600"></span>
        </button>

        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>

          <div className="hidden md:block">
            <p className="text-sm font-semibold">
              Aril
            </p>

            <p className="text-xs text-gray-500">
              Free Plan
            </p>
          </div>

        </div>

      </div>
    </header>
  );
}