import mongoose from 'mongoose';

const mongoUri = process.env.MONGODB_URI;
const globalCache = globalThis as typeof globalThis & { mongooseConnection?: Promise<typeof mongoose> };

export async function connectToDatabase() {
  if (!mongoUri) throw new Error('MONGODB_URI must be configured before accessing the database');
  if (!globalCache.mongooseConnection) {
    globalCache.mongooseConnection = mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 }).catch(error => {
      globalCache.mongooseConnection = undefined;
      throw error;
    });
  }
  return globalCache.mongooseConnection;
}
