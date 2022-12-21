import { ProductItemProps } from "./types";

const ProductItem = (props: ProductItemProps) => {
  const { item } = props;
  return <ul>{item.title}</ul>;
};

export default ProductItem;
