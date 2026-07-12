"use client";

import Link from "next/link";

import {
  Crown,
  LogOut,
  Settings,
  User,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center gap-3 rounded-xl p-1 transition-colors hover:bg-accent"
        aria-label="Buka menu profil"
      >
        <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Aril"
          />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>

        <div className="hidden text-left lg:block">
          <p className="text-sm font-semibold text-foreground">
            Aril
          </p>

          <p className="text-xs text-muted-foreground">
            Free Plan
          </p>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="w-64"
      >
        {/* User Info */}
        <div className="px-2 py-3">
          <p className="text-sm font-semibold">
            Aril
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Free Plan
          </p>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="p-0">
          <Link
            href="/profile"
            className="flex w-full items-center gap-2 px-2 py-1.5"
          >
            <User className="h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="p-0">
          <Link
            href="/settings"
            className="flex w-full items-center gap-2 px-2 py-1.5"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="p-0">
          <Link
            href="/premium"
            className="flex w-full items-center gap-2 px-2 py-1.5"
          >
            <Crown className="h-4 w-4" />
            Upgrade Premium
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="p-0 text-destructive focus:text-destructive">
          <Link
            href="/login"
            className="flex w-full items-center gap-2 px-2 py-1.5"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}