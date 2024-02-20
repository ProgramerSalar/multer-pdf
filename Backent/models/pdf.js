import mongoose from "mongoose";

const schema = new mongoose.Schema({
  pdf: String,
  title: String,
});

export const PdfSchema = mongoose.model("PdfSchema", schema);
