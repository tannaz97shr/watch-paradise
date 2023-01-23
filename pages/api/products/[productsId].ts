import type { NextApiRequest, NextApiResponse } from "next";

import { extractProducts } from ".";
import { IWatch } from "../../../models/general";

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const productId = req.query.productsId;
    const productsData: IWatch[] = extractProducts();
    const selectedProducts = productsData.find(
      (product) => product.id === productId
    );
    res.status(200).json({ product: selectedProducts });
  }
  res.status(200).json({ message: "this works!" });
}

export default handler;
