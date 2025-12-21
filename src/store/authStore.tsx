// import { create } from "zustand";

// export const useAuthStore = create((set) => ({
//   token: null,
//   login: (email: string, password: string) => {
//     if (email === "admin@store.com" && password === "admin123") {
//       set({ token: "secure-token" });
//       return true;
//     }
//     return false;
//   },
//   logout: () => set({ token: null }),
// }));
import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  email: string;
  avatar?: string;
};

type AuthState = {
  isInitialized: boolean;
  user: User | null;
  password: string | null;
  token: string | null;

  loginOrSetup: (email: string, password: string) => boolean;
  logout: () => void;
  changePassword: (current: string, next: string) => boolean;
  updateAvatar: (avatar: string) => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isInitialized: false,
      user: null,
      password: null,
      token: null,

      // 🔑 FIRST TIME → SETUP
      // 🔐 NEXT TIMES → LOGIN
      loginOrSetup: (email, password) => {
        const { isInitialized, password: storedPass } = get();

        // FIRST TIME SETUP
        if (!isInitialized) {
          set({
            isInitialized: true,
            password,
            token: "admin-token",
            user: { email },
          });
          return true;
        }

        // NORMAL LOGIN
        if (password === storedPass) {
          set({
            token: "admin-token",
            user: { email },
          });
          return true;
        }

        return false;
      },

      logout: () => set({ token: null }),

      // 🔁 CHANGE PASSWORD VIA SETTINGS
      changePassword: (current, next) => {
        if (current !== get().password) return false;
        set({ password: next, token: null });
        return true;
      },

      updateAvatar: (avatar) =>
        set((s) =>
          s.user ? { user: { ...s.user, avatar } } : {}
        ),
    }),
    {
      name: "admin-auth-storage",
    }
  )
);
