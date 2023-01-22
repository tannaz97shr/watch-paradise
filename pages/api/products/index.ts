import { WithId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectDatabase } from "../../../helpers/db-helper";

type ProductsType = { products: WithId<Document>[] };

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // const client = await connectDatabase();
  console.log("testi");
  if (req.method === "GET") {
    // const db = client.db();

    // const products = await db.collection("products").find().toArray();

    res.status(200).json({ products: [{ t: "1" }, { t: "2" }] });
  }
  // client.close;
}

export default handler;
