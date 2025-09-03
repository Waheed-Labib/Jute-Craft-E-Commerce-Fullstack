import { Schema, model, Document, Types } from 'mongoose';

export interface Contact extends Document {
    _id: Types.ObjectId;
    name: string;
    email: string;
    whatsapp: string;
    address: string;
    createdAt: Date;
}

const ContactSchema = new Schema<Contact>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    whatsapp: { type: String, required: true },
    address: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

export default model<Contact>('Contact', ContactSchema);