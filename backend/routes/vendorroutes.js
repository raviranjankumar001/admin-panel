import express from "express";
import jwt from "jsonwebtoken";
import Vendor from "../models/vendormodel.js";
import upload from "../middlewares/multer.js";
import { addProduct } from "../controllers/productController.js";

const venderrouter = express.Router();

// Register Vendor
venderrouter.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingVendor = await Vendor.findOne({ email });
    if (existingVendor) {
      return res.json({ message: "Email already exists" });
    }

    const newVendor = new Vendor({ username, email, password });
    await newVendor.save();

    res.json({ message: "Vendor registered successfully" });
  } catch (error) {
    res.json({ message: "Registration failed", error });
  }
});

// Login Vendor
venderrouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const vendor = await Vendor.findOne({ email });
    if (!vendor) {
      return res.json({ message: "Vendor not found" });
    }


    

    const token = jwt.sign({ id: vendor._id, email: vendor.email }, 'shhhhhhhhhh');

    res.json({ message: "Login successful", token, vendor: { id: vendor._id, email: vendor.email } });
  } catch (error) {
    res.json({ message: "Login failed", error });
  }
});


venderrouter.post('/product', upload.single('image'), addProduct);

export default venderrouter;
