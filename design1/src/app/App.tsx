import { RouterProvider } from "react-router";
import { router } from "@/app/routes";
import { Preloader } from "@/app/components/Preloader";
import { ScrollToTop } from "@/app/components/ScrollToTop";

export default function App() {
  return (
    <>
      <Preloader />
      <RouterProvider router={router} />
      <ScrollToTop />
    </>
  );
}
