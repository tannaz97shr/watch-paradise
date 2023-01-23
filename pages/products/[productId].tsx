import { useRouter } from "next/router";

import {
  ProductDetailContainer,
  ProductDetailsDescriptionStyled,
  ProductDetailsTitleStyled,
} from "../../components/products/styles";
import ProductDetailsLogistics from "../../components/products/productDetailsLogistics";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { getProductById, getProducts } from "../../helpers/requests/products";
import { IWatch } from "../../models/general";

interface ProductsDetailPageProps {
  product?: {product: IWatch};
}

function ProductsDetailPage(props: ProductsDetailPageProps) {

  const watch = props.product?.product;

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

export const getStaticProps: GetStaticProps = async (context) => {
  const productId = context?.params?.productId;
  let product: IWatch | undefined;
  if (productId) {
    product = await getProductById(productId[0]);
  }
  return {
    props: {
      product: {...product},
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products: IWatch[] = await getProducts();
  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export default ProductsDetailPage;
