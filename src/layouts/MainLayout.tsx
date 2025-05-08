
import { ReactNode } from "react";
import { Header } from "@/components/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container py-8">
        {children}
      </main>
      <footer className="bg-secondary py-6">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 JobHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
