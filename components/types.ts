import { ProducType } from "../models/general";

export interface ProductItemProps {
  item: ProducType;
}

export interface ProductsListProps {
    items?: ProducType[]
}
