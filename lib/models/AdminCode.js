import mongoose from "mongoose";

const AdminCodeSchema = new mongoose.Schema({
  code: { type: String, required: true },
});

export default mongoose.models.AdminCode ||
  mongoose.model("AdminCode", AdminCodeSchema);
