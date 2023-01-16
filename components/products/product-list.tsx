import ProductItem from "./product-item";
import { ProductsListProps } from "./types";
import { ProductListStyled } from "./styles";

const ProductList = (props: ProductsListProps) => {
  const { items } = props;
  return (
    <ProductListStyled>
      {items?.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ProductListStyled>
  );
};

export default ProductList;
