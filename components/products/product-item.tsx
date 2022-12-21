import Image from "next/image";

import { ProductItemProps } from "./types";
import { ProductCardStyled } from "./styles";

const ProductItem = (props: ProductItemProps) => {
  const { item } = props;
  return (
    <ProductCardStyled>
      <Image src={item.image} alt={item.title} />
      {item.title}
    </ProductCardStyled>
  );
};

export default ProductItem;
