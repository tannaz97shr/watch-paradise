import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllWatches } from "../../dummy-data";
import ProductList from "../../components/products/product-list";
import Filter from "../../components/products/filter/filter";
import { Inputs } from "../../components/products/types";

function ProductPage() {
  const router = useRouter();
  const allWatches = getAllWatches();

  const filterProductHandler = (params: Inputs) => {
    const fullPath = `/products/${
      params.brands.length ? params.brands : "undefined"
    }/${params.gender ? params.gender : "undefined"}/${
      params.priceMin ? params.priceMin : "undefined"
    }/${params.priceMax ? params.priceMax : "undefined"}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <Filter onFilterHandler={filterProductHandler} />
      <ProductList items={allWatches} />
    </Fragment>
  );
}

export default ProductPage;
