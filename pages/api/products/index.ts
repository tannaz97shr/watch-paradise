import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type ProductsType = { products: any };

export const buildProductsPath = () => path.join(process.cwd(), "data", "products.json");

export const extractProducts = () => {
  const data = fs.readFileSync(buildProductsPath());
  return JSON.parse(data.toString());
};


async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const data = extractProducts();
    res.status(200).json(data);
  }
}

export default handler;
