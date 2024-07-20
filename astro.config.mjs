import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind({
            // Example: Provide a custom path to a Tailwind config file
            configFile: "./tailwind.config.js",
        }),
    ],
});