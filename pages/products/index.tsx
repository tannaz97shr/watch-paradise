import { Fragment } from "react";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

import { getAllWatches } from "../../dummy-data";
import ProductList from "../../components/products/product-list";
import Filter from "../../components/products/filter/filter";
import { Inputs } from "../../components/products/types";
// import { getProducts } from "../../helpers/axios/products";

interface ProductPageProps {
  isOK: string;
}

function ProductPage(props: any) {
  console.log("props", props);
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

export async function getStaticProps() {
  return {
    props: {
      isOK: "felan",
    },
  };
};

export default ProductPage;
