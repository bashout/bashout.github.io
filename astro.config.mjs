import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site: "https://portfolio.bashout.work",
    integrations: [
        tailwind({
            // Example: Provide a custom path to a Tailwind config file
            configFile: "./tailwind.config.js",
        }),
        icon({
            include: {
                // Include only three `mdi` icons in the bundle
                devicon: ["*"],
                mdi: ["*"],
            },
        }),
    ],
});
