import { Schema, model, Types } from 'mongoose';

export interface Subscriber {
    _id: Types.ObjectId;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

const SubscriberSchema = new Schema<Subscriber>(
    {
        email: { type: String, required: true, unique: true },
    },
    { timestamps: true }
);

export const SubscriberModel = model<Subscriber>('Subscriber', SubscriberSchema);