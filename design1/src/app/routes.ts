import { createBrowserRouter } from "react-router";
import { HomePage } from "@/app/pages/HomePage";
import { AboutPage } from "@/app/pages/AboutPage";
import { ServicesPage } from "@/app/pages/ServicesPage";
import { ContactPage } from "@/app/pages/ContactPage";
import { NotFoundPage } from "@/app/pages/NotFoundPage";
import { Layout } from "@/app/components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "contact", Component: ContactPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);