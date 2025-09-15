import { ObjectId } from "mongodb";
import mongoose from "mongoose";

export type Category = {
    _id: string;
    name: string;
    description: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

export type Product = {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    isInStock: boolean;
    isFeatured: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export type ContactInfo = {
    phone: string,
    whatsapp: string,
    email: string,
    address: string
}