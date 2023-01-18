import { useRouter } from "next/router";

import { getFilteredProducts } from "../../dummy-data";
import { Inputs } from "../../components/products/types";
import ProductList from "../../components/products/product-list";
import { IWatch } from "../../models/general";
import Button from "../../components/ui/button/button";
import { ProductsEmptyListStyled } from "../../components/products/styles";

function FilteredProductsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  let filteredProducts: IWatch[] = [];
  if (filterData) {
    const brandsArray: string[] =
      filterData[0] !== "undefined" ? filterData[0].split(",") : [];
    const getFilteredProductsParams: Inputs = {
      brands: brandsArray,
      gender: filterData[1] !== "undefined" ? filterData[1] : "",
      priceMin: filterData[2] !== "undefined" ? +filterData[2] : 0,
      priceMax:
        filterData[3] !== "undefined" ? +filterData[3] : Number.MAX_VALUE,
    };
    filteredProducts = getFilteredProducts(getFilteredProductsParams);
  }
  if (filteredProducts.length) return <ProductList items={filteredProducts} />;
  return (
    <ProductsEmptyListStyled>
      <div>No Product Found !</div>
      <Button link="/products">Back to List</Button>
    </ProductsEmptyListStyled>
  );
}

export default FilteredProductsPage;
