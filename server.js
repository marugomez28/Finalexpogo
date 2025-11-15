import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/db.js";
import usuarioRoutes from "./src/routes/usuario.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conectar DB
connectDB();

// Rutas
app.use("/api/usuarios", usuarioRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
