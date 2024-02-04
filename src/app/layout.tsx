import type { Metadata } from "next";
import "./globals.css";
import "./global-animations.css";
import MenuComponent from "@/components/layout/menu/menu.component";

export const metadata: Metadata = {
  title: "MacAppsRepository",
  description: "Navigate Mac's World, Explore Apps for Free!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={"noise-wrapper"}></div>
        <div className={"main-wrapper"}>
          <MenuComponent />
          {children}
        </div>
      </body>
    </html>
  );
}
