import { Fragment } from "react";
import { useRouter } from "next/router";

import ProductList from "../../components/products/product-list";
import Filter from "../../components/products/filter/filter";
import { Inputs } from "../../components/products/types";
import { getProducts } from "../../helpers/axios/products";
import { IWatch } from "../../models/general";

interface ProductPageProps {
  products: IWatch[];
}

function ProductPage(props: ProductPageProps) {
  const router = useRouter();
  const allWatches = props.products;

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
  const products = await getProducts();

  return {
    props: {
      products,
    },
  };
}

export default ProductPage;
