import type { Metadata } from "next";
import type { ReactNode } from "react";
import "modern-normalize/modern-normalize.css";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

export const metadata: Metadata = {
  title: "NoteHub",
  description: "Manage your notes with NoteHub",
};

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function RootLayout({
  children,
  modal,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="uk">
      <body>
        <TanStackProvider>
          <Header />
          <div className="page-content">{children}</div>
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
