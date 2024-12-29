import express, { Request, Response } from "express";
import router from "./presentation/routes/pdfRouter";
import fs from 'fs';
import path from 'path';
import connectDatabase from "./infastructure/database/connection";
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDatabase();

// Define and create the uploads directory
// const uploadsDir = path.join(__dirname, '/uploads');
const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
  console.log(`Directory created: ${uploadsDir}`);
}

// Serve static files from the uploads directory
app.use('/uploads', express.static(uploadsDir));

// Define routes
app.use('/', router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
