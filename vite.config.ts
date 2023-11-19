import { defineConfig } from "vite";
import monkey, { MonkeyUserScript } from "vite-plugin-monkey";

const userscript: MonkeyUserScript = {
  name: "Anime Subreddit Discussion Link",
  namespace: "https://github.com/kiangkuang",
  version: "1.2.1",
  description:
    "Adds a link to Anime Subreddit episode discussion threads on anime platforms",
  author: "Kiang Kuang",
  include: ["*://aniwave.tld/watch/*"],
  icon: "https://www.google.com/s2/favicons?sz=64&domain=github.com",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript,
      build: {
        fileName: "script.user.js",
      },
    }),
  ],
});
