import mongoose, { Schema, Document, model } from 'mongoose';

export interface Product extends Document {
    name: string;
    slug: string;
    description: string;
    price: number;
    category: mongoose.Types.ObjectId;
    image: string;
    isInStock: boolean;
    featured: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema = new Schema<Product>(
    {
        name: { type: String, required: true, unique: true },
        slug: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
        image: { type: String, required: true },
        isInStock: { type: Boolean, required: true },
        featured: { type: Boolean, default: false },
    },
    { timestamps: true }
);

export default model<Product>('Product', ProductSchema);