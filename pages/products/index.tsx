import { Fragment } from "react";

import { getAllWatches } from "../../dummy-data";
import ProductList from "../../components/products/product-list";
import Filter from "../../components/products/filter/filter";

function ProductPage() {

  const allWatches = getAllWatches();

    return (
      <Fragment>
        <Filter />
        <ProductList items={allWatches} />
      </Fragment>
    );
  }
  
  export default ProductPage;
  