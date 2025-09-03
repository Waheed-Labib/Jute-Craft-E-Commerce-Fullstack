import { Schema, model, Document } from 'mongoose';

export interface Admin extends Document {
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const AdminSchema = new Schema<Admin>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

export const AdminModel = model<Admin>('Admin', AdminSchema);
