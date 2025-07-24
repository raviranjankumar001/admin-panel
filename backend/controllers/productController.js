// backend/controllers/productController.js
import Product from '../models/productmodel.js';
import cloudinary from '../config/cloudinary.js';

export const addProduct = async (req, res) => {
  try {
    const { name, price, email } = req.body;
    const imageFile = req.file;

    if (!name || !price || !email || !imageFile) {
      return res.status(400).json({ success: false, message: 'Missing product fields' });
    }

    const uploaded = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: 'image',
    });

    const imageUrl = uploaded.secure_url;

    const newProduct = new Product({
      name,
      price,
      vendorEmail: email,
      image: imageUrl,
    });

    await newProduct.save();

    res.status(201).json({ success: true, message: 'Product added', product: newProduct });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// GET all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Failed to fetch products' });
  }
};




// DELETE product by ID
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Failed to delete product' });
  }
};