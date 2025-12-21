import { create } from "zustand";

type ThemeState = {
  dark: boolean;
  toggle: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  dark: false,
  toggle: () =>
    set((s) => {
      const next = !s.dark;
      document.documentElement.classList.toggle("dark", next);
      return { dark: next };
    }),
}));
