import { Fragment } from "react";

import { getFeaturedWatches } from "../dummy-data";
import ProductList from "../components/products/product-list";

function HomePage() {
  const featuredWatches = getFeaturedWatches();

  return (
    <Fragment>
      <ProductList items={featuredWatches} />
    </Fragment>
  );
}

export default HomePage;
