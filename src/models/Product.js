const mongoose = require('mongoose');

const VariantSchema = new mongoose.Schema({
  size: { type: String },
  color: { type: String },
  stock: { type: Number, required: true, min: 0 },
}, { _id: false });

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  price: { type: Number, required: true, min: 0 },
  discount: { type: Number, min: 0, max: 100 },
  variants: { type: [VariantSchema], default: [] },
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema); 