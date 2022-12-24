import Image from "next/image";

import { ProductItemProps } from "./types";
import {
  ProductCardStyled,
  ProductContentStyled,
  CardTitleStyled,
  CardDetailStyled,
  ImageContainerStyled,
} from "./styles";

const ProductItem = (props: ProductItemProps) => {
  const { item } = props;
  return (
    <ProductCardStyled>
      <ImageContainerStyled>
        <Image src={item.image} alt={item.title} fill />
      </ImageContainerStyled>
      <ProductContentStyled>
        <CardTitleStyled>{item.title}</CardTitleStyled>
        <CardDetailStyled>Price: {item.price}$</CardDetailStyled>
        {item.isFeatured && (
          <CardDetailStyled>
            <Image
              src="/icons/star.png"
              alt="featured"
              width={16}
              height={16}
            />
            <span>featured</span>
          </CardDetailStyled>
        )}
      </ProductContentStyled>
    </ProductCardStyled>
  );
};

export default ProductItem;
