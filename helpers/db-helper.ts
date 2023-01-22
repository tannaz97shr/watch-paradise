import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://tannaz:tannaz3560@cluster0.wclveo1.mongodb.net/?retryWrites=true&w=majority"
  );
  return client;
}
