import axios, { AxiosResponse } from "axios";
import { IWatch } from "../../models/general";

const productUrl = "products";

export const getProducts = async () => {
  
  const response = await fetch("http://localhost:3000/api/products", {
    method: "GET",
  });
  const data = await response.json()
  return data;
};
