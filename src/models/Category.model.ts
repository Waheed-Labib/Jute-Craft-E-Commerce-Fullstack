import { Schema, model, Document } from 'mongoose';

export interface Category extends Document {
    name: string;
    slug: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const CategorySchema = new Schema<Category>({
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, default: '' },
}, {
    timestamps: true
});

export const CategoryModel = model<Category>('Category', CategorySchema);