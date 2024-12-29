import express from 'express';
import { pdfRepository } from '../../infastructure/repository/pdfRepostory';
import { PdfControllers } from '../controllers/pdfController';
import { upload } from '../../middleware/multer';
const router = express.Router();


const repository = new pdfRepository();
const controller = new PdfControllers(repository)

router.post('/pdf-upload',upload.single('pdf'),controller.fileUploaded.bind(controller))
router.get('/pdf-preview',controller.retrieveFile.bind(controller))
router.get('/pdf/:fileId',controller.fetchFile.bind(controller))

export default router;