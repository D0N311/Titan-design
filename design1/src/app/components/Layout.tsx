import { Outlet } from "react-router";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import { ScrollProgress } from "@/app/components/ScrollProgress";
import { CustomCursor } from "@/app/components/CustomCursor";
import { FloatingContactButton } from "@/app/components/FloatingContactButton";
import { ScrollToTop } from "@/app/components/ScrollToTop";

export function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <Outlet />
      <Footer />
      <FloatingContactButton />
      <ScrollToTop />
    </div>
  );
}