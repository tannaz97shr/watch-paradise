import ProductItem from "./product-item";
import { ProductsListProps } from "./types";

const ProductList = (props: ProductsListProps) => {
  const { items } = props;
  return (
    <li>
      {items?.map((item) => (
        <ProductItem item={item} />
      ))}
    </li>
  );
};

export default ProductList;
