import axios, { AxiosResponse } from "axios";
import { IWatch } from "../../models/general";
// import { server } from "../../config";

const productUrl = "products";

export const getProducts = async () => {
  const response = await fetch(`/${productUrl}`);
  const data = await response.json();
  console.log("testi data", data);
    try {
      const result = await axios.get(productUrl);
      return result.data;
    } catch (error) {
      console.log("Error:", error);
    }
};
