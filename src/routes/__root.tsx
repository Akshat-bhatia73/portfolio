import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { personal } from "@/data/resume";
import "@/styles/globals.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${personal.name} | ${personal.title}` },
      { name: "description", content: personal.tagline },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "shortcut icon", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Doto:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap",
      },
    ],
  }),
  component: RootDocument,
});

const themeScript = `
(() => {
  const saved = localStorage.getItem("theme");
  const theme = saved === "light" || saved === "dark"
    ? saved
    : (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  document.documentElement.dataset.theme = theme;
})();
`;

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
