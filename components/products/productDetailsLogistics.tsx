import Image from "next/image";

import {
  ProductDetailsImageStyled,
  ProductDetailsLogisticsStyled,
  ProductDetailsContentStyled,
} from "./styles";

interface ProductDetailsLogisticsProps {
  image: string;
  code: string;
  price: number;
  featured: boolean;
}

const ProductDetailsLogistics = (props: ProductDetailsLogisticsProps) => {
  return (
    <ProductDetailsLogisticsStyled>
      <ProductDetailsImageStyled>
        <Image src={props.image} alt={props.code} fill />
      </ProductDetailsImageStyled>
      <ProductDetailsContentStyled>
        <div>
          <span>Code:</span> {props.code}
        </div>
        <div>
          <span>Price:</span> {props.price} $
        </div>
        {props.featured && (
          <div>
            <span>Featured</span>
            <Image
              src="/icons/star.png"
              alt="featured"
              width={16}
              height={16}
            />
          </div>
        )}
      </ProductDetailsContentStyled>
    </ProductDetailsLogisticsStyled>
  );
};

export default ProductDetailsLogistics;
