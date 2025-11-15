import express from "express";
import Usuario from "../models/Usuario.js";

const router = express.Router();

// POST guardar usuario
router.post("/guardar", async (req, res) => {
  try {
    const { nombre, apellido, hora } = req.body;

    if (!nombre || !apellido || !hora) {
      return res.status(400).json({ message: "Datos incompletos" });
    }

    const nuevoUsuario = new Usuario({ nombre, apellido, hora });
    await nuevoUsuario.save();

    res.json({
      message: "Usuario guardado correctamente",
      data: nuevoUsuario,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al guardar",
      error: error.message,
    });
  }
});

// GET obtener todos
router.get("/listar", async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Error al listar" });
  }
});

export default router;
