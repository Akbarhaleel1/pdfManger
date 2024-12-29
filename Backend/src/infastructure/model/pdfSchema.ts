import mongoose, { Schema, Document } from 'mongoose';

interface IPdf extends Document {
    fileName: string;
    filePath: string;
    fileSize: number;
    uploadDate: Date;
    documentType?: string; 
}

const pdfSchema: Schema<IPdf> = new Schema({
    fileName: { type: String, required: true },
    filePath: { type: String, required: true },
    fileSize: { type: Number, required: true },
    uploadDate: { type: Date, default: Date.now },
    documentType: { type: String, enum: ['Invoice', 'Report', 'Other'], default: 'Other' } 
});

// Create and export the model
const Pdf = mongoose.model<IPdf>('Pdf', pdfSchema);

export default Pdf;
