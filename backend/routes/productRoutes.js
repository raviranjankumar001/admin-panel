// backend/routes/productRoutes.js
import express from 'express';
import { addProduct , getAllProducts, deleteProduct } from '../controllers/productController.js';
import upload from '../middlewares/multer.js'; // your multer config
import { adminAuth } from '../middlewares/adminauth.js';

const router = express.Router();

router.post('/', upload.single('image'), addProduct);

router.get('/all', adminAuth, getAllProducts);
router.delete('/:id', adminAuth, deleteProduct);

export default router;
