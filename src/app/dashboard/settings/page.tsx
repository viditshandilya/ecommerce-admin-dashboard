// "use client";

// import { useThemeStore } from "@/store/themeStore";

// export default function SettingsPage() {
//   const { dark, toggle } = useThemeStore();

//   return (
//     <div className="space-y-6">
//       <h1 className="text-2xl font-semibold">Settings</h1>

//       <div className="bg-white rounded-xl shadow p-4 flex justify-between">
//         <span>Dark Mode</span>
//         <button
//           onClick={toggle}
//           className="px-3 py-1 border rounded"
//         >
//           {dark ? "ON" : "OFF"}
//         </button>
//       </div>
//     </div>
//   );
// }
  
"use client";

import { useForm } from "react-hook-form";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";

export default function SettingsPage() {
  const changePassword = useAuthStore((s) => s.changePassword);
  const logout = useAuthStore((s) => s.logout);
  const [msg, setMsg] = useState("");

  const { register, handleSubmit } = useForm<{
    currentPassword: string;
    newPassword: string;
  }>();

  const onSubmit = (data: any) => {
    const ok = changePassword(
      data.currentPassword,
      data.newPassword
    );

    if (!ok) {
      setMsg("❌ Current password is wrong");
      return;
    }

    setMsg("✅ Password updated. Please login again.");
    logout();
  };

  return (
    <div className="max-w-lg bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        Change Admin Password
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="password"
          {...register("currentPassword")}
          placeholder="Current Password"
          className="border p-2 w-full rounded"
        />

        <input
          type="password"
          {...register("newPassword")}
          placeholder="New Password"
          className="border p-2 w-full rounded"
        />

        {msg && <p className="text-sm">{msg}</p>}

        <button className="bg-black text-white px-4 py-2 rounded">
          Update Password
        </button>
      </form>
    </div>
  );
}
