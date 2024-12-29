import { IpdfRepository } from "../interface/IpdfRepository";
import Pdf from "../model/pdfSchema";

export class pdfRepository implements IpdfRepository{
    async saveFile(file:any){
        console.log('the file is',file)
        const { originalname, filename, path, size } = file;

        const pdf = new Pdf({
            fileName: originalname,
            filePath: path,
            fileSize: size,
            uploadDate: new Date()
        })
        console.log('the pdf trying to saving',pdf);
        
        try{
            const savedPdf = await pdf.save();
            console.log("File saved successfully:", savedPdf);
            return true 
        }catch(error){
            console.error("Error saving file:", error);
            throw new Error("Error saving PDF file to the database.");      
        }
    }
    async retrievefile(){
        console.log('the file is')
        try{
            let retrivePdf = await Pdf.find({documentType:'Other'})
            console.log("File saved successfully:", retrivePdf);
            return retrivePdf
        }catch(error){
            console.error("Error saving file:", error);
            throw new Error("Error saving PDF file to the database.");      
        }
    }
    async fetchFile(fileId:string){
        console.log('the file is')
        try{
            let retrivePdf = await Pdf.findOne({_id:fileId})
            console.log("File saved successfully:", retrivePdf);
            return retrivePdf
        }catch(error){
            console.error("Error saving file:", error);
            throw new Error("Error saving PDF file to the database.");      
        }
    }

}