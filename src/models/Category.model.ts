import { Schema, model, Document } from 'mongoose';

export interface Category extends Document {
    name: string;
    description: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

const CategorySchema = new Schema<Category>({
    name: { type: String, required: true, unique: true },
    description: { type: String, default: '' },
    image: { type: String, unique: true }
}, {
    timestamps: true
});

export const CategoryModel = model<Category>('Category', CategorySchema);