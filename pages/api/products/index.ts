import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type ProductsType = { products: any };

export const getAllDataFs = () => {
  const filepath = path.join(process.cwd(), "data", "products.json");
  // const fileData = fs.readFileSync(filepath);
  // const data = JSON.parse(fileData.toString());
  const data = fs.readFileSync(filepath);
  return JSON.parse(data.toString());
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const data = getAllDataFs();
    res.status(200).json(data);
  }
}

export default handler;
