import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in .env.local");
}

/**
 * Use a global cached connection so we don't create multiple connections
 * in development (Next.js hot reload) or in serverless environments.
 */
interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

const globalForMongoose = global as unknown as { mongoose: MongooseCache };

const cached = globalForMongoose.mongoose || { conn: null, promise: null };
globalForMongoose.mongoose = cached;

export async function connectToDB() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
            // You can add options here if needed
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
