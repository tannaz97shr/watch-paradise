const productsUrl = "products";

export const getProducts = async () => {
  const response = await fetch(`http://localhost:3000/api/${productsUrl}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export const getProductById = async (pId: string) => {
  const response = await fetch(`http://localhost:3000/api/${productsUrl}/${pId}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export const getFilteredProducts = async (params: string[]) => {
  let url = "";
  params.forEach((param) => {
    url = url + `/${param}`;
  });
  const response = await fetch(`http://localhost:3000/api/${productsUrl}${url}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};
