import { create } from "zustand";
import { persist } from "zustand/middleware";

/* ---------- TYPES ---------- */
export type User = {
  name: string;
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

/* ---------- STORE ---------- */
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isInitialized: false,
      user: null,
      password: null,
      token: null,

      // First-time setup OR normal login
      loginOrSetup: (email, password) => {
        const { isInitialized, password: storedPass } = get();

        if (!isInitialized) {
          set({
            isInitialized: true,
            password,
            token: "admin-token",
            user: {
              name: "Admin",
              email,
            },
          });
          return true;
        }

        if (password === storedPass) {
          set({
            token: "admin-token",
            user: {
              name: "Admin",
              email,
            },
          });
          return true;
        }

        return false;
      },

      logout: () => set({ token: null }),

      changePassword: (current, next) => {
        if (current !== get().password) return false;
        set({ password: next, token: null });
        return true;
      },

      updateAvatar: (avatar) =>
        set((state) =>
          state.user
            ? { user: { ...state.user, avatar } }
            : state
        ),
    }),
    {
      name: "admin-auth-storage",
    }
  )
);
