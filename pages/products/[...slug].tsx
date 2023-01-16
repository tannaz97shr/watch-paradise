import { useRouter } from "next/router";

import { getFilteredProducts } from "../../dummy-data";
import { Inputs } from "../../components/products/types";
import ProductList from "../../components/products/product-list";

function FilteredProductsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
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
    const filteredProducts = getFilteredProducts(getFilteredProductsParams);
    return <ProductList items={filteredProducts} />
  }

  return (
    <div>
      <h1>The Filtered Products Page</h1>
    </div>
  );
}

export default FilteredProductsPage;
