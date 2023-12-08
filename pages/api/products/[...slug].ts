import type { NextApiRequest, NextApiResponse } from "next";

import { extractProducts } from ".";
import { IWatch } from "../../../models/general";
import { Inputs } from "../../../components/products/types";

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const filterParams = req.query.slug;

    let brands: string[];
    let gender: string;
    let priceMin: number;
    let priceMax: number;

    if (filterParams) {
      brands =
        filterParams[0] !== "undefined" ? filterParams[0].split(",") : [];
      gender = filterParams[1] !== "undefined" ? filterParams[1] : "";
      priceMin = filterParams[2] !== "undefined" ? +filterParams[2] : 0;
      priceMax =
        filterParams[3] !== "undefined" ? +filterParams[3] : Number.MAX_VALUE;
    }
    const productsData: IWatch[] = extractProducts();
    const filteredProducts = productsData.filter(
      (watch) =>
        (brands.length ? brands.includes(watch.brand) : true) &&
        (gender ? gender === watch.gender : true) &&
        watch.price >= priceMin &&
        watch.price <= priceMax
    );

    res.status(200).json({ products: filteredProducts });
  }
}

export default handler;
