import { Fragment } from "react";

import { getAllWatches } from "../../dummy-data";
import ProductList from "../../components/products/product-list";

function ProductPage() {

  const allWatches = getAllWatches();

    return (
      <Fragment>
        <ProductList items={allWatches} />
      </Fragment>
    );
  }
  
  export default ProductPage;
  