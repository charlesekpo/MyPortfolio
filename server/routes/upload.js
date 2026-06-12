import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: { folder: 'portfolio', allowed_formats: ['jpg', 'png', 'webp'] },
});

const upload = multer({ storage });
const router = express.Router();

router.post('/', upload.single('image'), (req, res) => {
  res.json({ url: req.file.path });
});

export default router;