import type { NextApiRequest, NextApiResponse } from "next";

import { extractProducts } from ".";
import { IWatch } from "../../../models/general";
import { Inputs } from "../../../components/products/types";

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const filterParams = req.query.slug;

    if (filterParams) {
      const brands: string[] =
        filterParams[0] !== "undefined" ? filterParams[0].split(",") : [];
      const gender = filterParams[1] !== "undefined" ? filterParams[1] : "";
      const priceMin = filterParams[2] !== "undefined" ? +filterParams[2] : 0;
      const priceMax =
        filterParams[3] !== "undefined" ? +filterParams[3] : Number.MAX_VALUE;
    }
  }
}

export default handler;
