import { Request, Response, NextFunction } from "express";
import { IpdfRepository } from "../../infastructure/interface/IpdfRepository";

export class PdfControllers {
    private pdfRepository: IpdfRepository;

    constructor(pdfRepository: IpdfRepository) {
        this.pdfRepository = pdfRepository;
    }

    // Updated fileUploaded method
    async fileUploaded(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log('File uploaded was successful', req.file);

            if (!req.file) {
                // Handle missing file by sending a 400 response
                 res.status(400).json({ msg: 'File upload failed: No file provided' });
            }

            
            // Process the uploaded file here using pdfRepository
            let result = await this.pdfRepository.saveFile(req.file);
            console.log('result issedf geting',result)
            // Send success response
            res.status(200).json({ msg: 'File uploaded successfully',status:true });

        } catch (error) {
            // Pass any error to the next middleware (error handler)
            next(error);
        }
    }
    async retrieveFile(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log('File uploaded was successful', req.file);

           
            let result = await this.pdfRepository.retrievefile();
            console.log('result is',result);
            
            res.status(200).json({ result: result,status:true });

        } catch (error) {
            // Pass any error to the next middleware (error handler)
            next(error);
        }
    }
    async fetchFile(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { fileId } = req.params;

            console.log('File fetchFile was successful', fileId);

           
            let result = await this.pdfRepository.fetchFile(fileId);
            console.log('result is',result);
            
            if (result && result.filePath) {
                result.filePath = result.filePath.replace(/\\/g, '/');
                console.log('result.filePath',result.filePath);
            }
    
            res.status(200).json({ result: result,status:true });

        } catch (error) {
            next(error);
        }
    }
}
