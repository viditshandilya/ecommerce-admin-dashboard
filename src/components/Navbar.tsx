// // src/components/Navbar.tsx
// "use client";

// import Image from "next/image";
// import { useThemeStore } from "@/store/themeStore";

// export default function Navbar() {
//   const toggle = useThemeStore((s) => s.toggle);

//   return (
//     <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
//       <input
//         placeholder="Search products, orders..."
//         className="hidden md:block w-80 px-4 py-2 text-sm border rounded-lg bg-slate-50"
//       />

//       <div className="flex items-center gap-4">
//         <button
//           onClick={toggle}
//           className="px-3 py-1 text-sm border rounded-lg"
//         >
//           Toggle Theme
//         </button>

//         <div className="text-right">
//           <p className="text-sm font-medium">Admin</p>
//           <p className="text-xs text-slate-500">admin@store.com</p>
//         </div>

//         <Image
//           src="/avatar.png"
//           alt="avatar"
//           width={36}
//           height={36}
//           className="rounded-full border"
//         />
//       </div>
//     </header>
//   );
// }
"use client";

import Image from "next/image";
import { useDataStore } from "@/store/dataStore";
import { useAuthStore } from "@/store/authStore";
import { useThemeStore } from "@/store/themeStore";

export default function Navbar() {
  const setSearch = useDataStore((s) => s.setSearch);
  const user = useAuthStore((s) => s.user);
  const updateAvatar = useAuthStore((s) => s.updateAvatar);
  const toggleTheme = useThemeStore((s) => s.toggle);

  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      {/* Search */}
      <input
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
        className="hidden md:block w-80 px-4 py-2 text-sm border rounded-lg bg-slate-50"
      />

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 text-sm border rounded-lg"
        >
          Toggle Theme
        </button>

        <div className="text-right">
          <p className="text-sm font-medium">{user?.name}</p>
          <p className="text-xs text-slate-500">{user?.email}</p>
        </div>

        {/* Avatar Upload */}
        <input
          type="file"
          accept="image/*"
          id="avatar-upload"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = () =>
              updateAvatar(reader.result as string);
            reader.readAsDataURL(file);
          }}
        />

        <label htmlFor="avatar-upload" className="cursor-pointer">
          <Image
            src={user?.avatar || "/avatar.png"}
            width={36}
            height={36}
            className="rounded-full border object-cover"
            alt="avatar"
          />
        </label>
      </div>
    </header>
  );
}
