
const productUrl = "products";

export const getProducts = async () => {
  
  const response = await fetch("http://localhost:3000/api/products", {
    method: "GET",
  });
  const data = await response.json()
  return data;
};

export const getProductById = async (pId: string) => {
  const response = await fetch(`http://localhost:3000/api/products/${pId}`, {
    method: "GET",
  });
  const data = await response.json()
  return data;
}