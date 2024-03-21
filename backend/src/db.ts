import { MongoClient, Db } from 'mongodb';

let client: MongoClient | undefined;
let db: Db | undefined;

const dbName = 'FU'; 
const connectionString = 'mongodb://localhost:27017';

export async function connectToDatabase(): Promise<Db> {
  try {
    if (!client) {
      client = new MongoClient(connectionString);
      await client.connect();
      console.log('Connected to MongoDB');
    }

    db = client.db(dbName);
    return db;
  } catch (error: any) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Error connecting to MongoDB');
  }
}

export function getDb(): Db {
  if (!db) {
    throw new Error('Database connection has not been initialized');
  }
  return db;
}
