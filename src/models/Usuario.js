import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  hora: { type: String, required: true },
});

export default mongoose.model("Usuario", UsuarioSchema);
