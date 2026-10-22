import mongoose from "mongoose";

// Reuse the connection (and the in-flight connection promise) across hot
// reloads and serverless invocations. Without this, every request could open
// a new connection or queue queries while mongoose buffers them.
const globalCache = globalThis;

globalCache.__mongooseCache ??= { conn: null, promise: null };

const cached = globalCache.__mongooseCache;

export const connectToDb = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not set");
    }

    cached.promise = mongoose.connect(process.env.MONGO_URI, {
      // Fail fast instead of buffering queries for 10s+ when the DB is down.
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
    });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    // Allow the next request to retry a failed connection.
    cached.promise = null;
    throw error;
  }
};
