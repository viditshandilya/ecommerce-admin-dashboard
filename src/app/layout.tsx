import type { ReactNode } from "react";
import "./globals.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
