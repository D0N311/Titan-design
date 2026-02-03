import { createBrowserRouter } from "react-router";
import { Layout } from "@/app/components/Layout";
import { Home } from "@/app/pages/Home";
import { About } from "@/app/pages/About";
import { Services } from "@/app/pages/Services";
import { Contact } from "@/app/pages/Contact";
import { Terms } from "@/app/pages/Terms";
import { Privacy } from "@/app/pages/Privacy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "terms", Component: Terms },
      { path: "privacy", Component: Privacy },
    ],
  },
]);
