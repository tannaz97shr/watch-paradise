import { Fragment } from "react";
import { useRouter } from "next/router";

import { getWatchById } from "../../dummy-data";
import {
  ProductDetailContainer,
  ProductDetailsDescriptionStyled,
  ProductDetailsTitleStyled,
} from "../../components/products/styles";
import ProductDetailsLogistics from "../../components/products/productDetailsLogistics";

function ProductsDetailPage() {
  const router = useRouter();

  const watch = getWatchById(router.query.productId);

  if (!watch) return <div>No Product Found!</div>;

  return (
    <ProductDetailContainer>
      <ProductDetailsTitleStyled>{watch.title}</ProductDetailsTitleStyled>
      <ProductDetailsLogistics
        image={watch.image}
        code={watch.productCode}
        price={watch.price}
        featured={watch.isFeatured}
      />
      <ProductDetailsDescriptionStyled>
        {watch.description}
      </ProductDetailsDescriptionStyled>
    </ProductDetailContainer>
  );
}

export default ProductsDetailPage;
