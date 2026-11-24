import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    handle: { theme: "home" },
    lazy: () => import("./pages/AboutPage").then((m) => ({ Component: m.AboutPage })),
  },
  {
    path: "/what-i-do",
    handle: { theme: "business" },
    lazy: () => import("./pages/WhatIDoPage").then((m) => ({ Component: m.WhatIDoPage })),
  },
  {
    path: "/side-quests",
    handle: { theme: "pixel" },
    lazy: () => import("./pages/SideQuestsPage").then((m) => ({ Component: m.SideQuestsPage })),
  },
  {
    path: "*",
    handle: { theme: "home" },
    lazy: () => import("./pages/NotFoundPage").then((m) => ({ Component: m.NotFoundPage })),
  },
]);
