import { ProducType, gender } from "../../models/general";

export interface ProductItemProps {
  item: ProducType;
}

export interface ProductsListProps {
    items?: ProducType[]
}


export type Inputs = {
  brands: string[];
  priceMin: number;
  priceMax: number;
  gender?: string;
};