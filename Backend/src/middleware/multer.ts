import multer from 'multer';

// Configure storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Save with unique timestamp
  },
});

// Export the upload middleware
export const upload = multer({ storage });

// Extend Request interface to include Multer file type
export interface MulterRequest extends Request {
  file?: Express.Multer.File;
}
