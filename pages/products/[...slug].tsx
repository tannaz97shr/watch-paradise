import { useRouter } from "next/router";
import { GetServerSideProps } from "next/types";

import { Inputs } from "../../components/products/types";
import ProductList from "../../components/products/product-list";
import { IWatch } from "../../models/general";
import Button from "../../components/ui/button/button";
import { ProductsEmptyListStyled } from "../../components/products/styles";
import { getFilteredProducts } from "../../helpers/requests/products";

interface FilteredProductsPage {
  products: IWatch[];
}

function FilteredProductsPage(props: FilteredProductsPage) {
  const router = useRouter();
  const filterParams = router.query.slug;
  let filteredProducts: IWatch[] = [];
  if (filterParams) {
    const brandsArray: string[] =
      filterParams[0] !== "undefined" ? filterParams[0].split(",") : [];
    const getFilteredProductsParams: Inputs = {
      brands: brandsArray,
      gender: filterParams[1] !== "undefined" ? filterParams[1] : "",
      priceMin: filterParams[2] !== "undefined" ? +filterParams[2] : 0,
      priceMax:
        filterParams[3] !== "undefined" ? +filterParams[3] : Number.MAX_VALUE,
    };
    filteredProducts = props.products;
  }
  if (filteredProducts.length) return <ProductList items={filteredProducts} />;
  return (
    <ProductsEmptyListStyled>
      <div>No Product Found !</div>
      <Button link="/products">Back to List</Button>
    </ProductsEmptyListStyled>
  );
}

export const getServerSideProps: GetServerSideProps = async (constext) => {
  const fetchedParams = constext.params?.slug;
  let params: string[] = [];
  if (typeof fetchedParams === "object") {
    params = fetchedParams;
  }

  const products = await getFilteredProducts(params);
  return {
    props: {
      products: products.products,
    },
  };
};

export default FilteredProductsPage;
