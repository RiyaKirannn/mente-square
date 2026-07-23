import { createFileRoute } from "@tanstack/react-router";
import html from "../../public/site.html?raw";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(html, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
  component: Index,
});

function Index() {
  // Server handler above returns raw HTML for GET requests.
  return null;
}
