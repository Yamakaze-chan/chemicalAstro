// // src/lib/mongodb.ts
// import { MongoClient } from "mongodb";

// const uri = import.meta.env.DB_LINK_MONGODB!;
// const client = new MongoClient(uri);

// let dbInstance: Awaited<ReturnType<typeof client.db>> | null = null;

// export async function getDB() {
//   if (!dbInstance) {
//     await client.connect();
//     dbInstance = client.db("chemical");
//   }
//   return dbInstance;
// }

// src/lib/mongodb.ts
import { MongoClient } from "mongodb";

let client: MongoClient | null = null;
let dbInstance: Awaited<ReturnType<MongoClient["db"]>> | null = null;

export async function getDB(env: Record<string, string>) {
//   const uri = import.meta.env.VITE_DB_LINK_MONGODB!;
//   console.log("DB_LINK_MONGODB3 =", uri);
const uri = "api"; 

  if (!uri) throw new Error("Thiếu biến môi trường DB_LINK_MONGODB");

  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    dbInstance = client.db("chemical");
  }

  return dbInstance!;
}

