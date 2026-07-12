"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
} from "lucide-react";

import { Input } from "@/components/ui/input";

export default function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] =
    useState(false);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // TODO: Integrasikan authentication nanti
    router.push("/");
  };

  return (
    <div className="w-full max-w-md">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Selamat datang kembali
        </h1>

        <p className="mt-2 text-muted-foreground">
          Masuk untuk melanjutkan perjalanan belajarmu.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >
        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium"
          >
            Email
          </label>

          <div className="relative mt-2">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              id="email"
              type="email"
              placeholder="nama@email.com"
              className="h-12 pl-10"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium"
          >
            Password
          </label>

          <div className="relative mt-2">
            <LockKeyhole className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              id="password"
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Masukkan password"
              className="h-12 px-10"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  (current) => !current
                )
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={
                showPassword
                  ? "Sembunyikan password"
                  : "Tampilkan password"
              }
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Options */}
        <div className="flex items-center justify-between gap-4">
          <label className="flex cursor-pointer items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-border accent-primary"
            />
            Ingat saya
          </label>

          <Link
            href="/forgot-password"
            className="text-sm font-medium text-primary hover:underline"
          >
            Lupa password?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="h-12 w-full rounded-xl bg-primary font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Masuk
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Belum punya akun?{" "}
        <Link
          href="/register"
          className="font-semibold text-primary hover:underline"
        >
          Daftar sekarang
        </Link>
      </p>
    </div>
  );
}