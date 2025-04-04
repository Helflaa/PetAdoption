import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    appType: "mpa",
    base: "",
    build: {
        target: "esnext",
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html"),
                login: path.resolve(__dirname, "login/index.html"),
                register: path.resolve(__dirname, "register/index.html"),
                admin: path.resolve(__dirname, "admin/index.html"),
                pet: path.resolve(__dirname, "pet/index.html"),
            },
        },
    },
});