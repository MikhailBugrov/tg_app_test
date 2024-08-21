import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import basicSsl from "@vitejs/plugin-basic-ssl";
import legacy from "@vitejs/plugin-legacy";

// export default defineConfig({
//   plugins: [react(), basicSsl()],
//   base: "tg_app_test",
// });

// function handleModuleDirectivesPlugin() {
//   return {
//     name: 'handle-module-directives-plugin',
//     transform(code, id) {
//       if (id.includes('@vkontakte/icons')) {
//         code = code.replace(/"use-client";?/g, '');
//       }
//       return { code };
//     },
//   };
// }

export default defineConfig({
  base: "tg_app_test",

  plugins: [
    react(),
    // basicSsl(),
    // handleModuleDirectivesPlugin(),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],

  server: {
    port: 5173,
    host: "localhost",
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
  },

  build: {
    outDir: "build",
  },
});
