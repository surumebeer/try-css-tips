import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { copyFileSync } from "node:fs";
import { join } from "node:path";

export default defineConfig({
  base: "/try-css-tips/",
  plugins: [
    remix({
      ssr: false,
      basename: "/try-css-tips/",
      buildEnd(args) {
        if (!args.viteConfig.isProduction) return;
        const buildPath = args.viteConfig.build.outDir;
        copyFileSync(
          join(buildPath, "index.html"),
          join(buildPath, "404.html")
        );
      },
    }),
  ],
});
