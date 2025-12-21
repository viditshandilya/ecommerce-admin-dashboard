"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const router = useRouter();
  const loginOrSetup = useAuthStore((s) => s.loginOrSetup);
  const isInitialized = useAuthStore((s) => s.isInitialized);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    const ok = loginOrSetup(email, password);
    if (!ok) {
      setError("Invalid email or password");
      return;
    }
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {isInitialized ? "Admin Login" : "Admin Setup"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}

        <button
          onClick={submit}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {isInitialized ? "Login" : "Create Admin"}
        </button>
      </div>
    </div>
  );
}
