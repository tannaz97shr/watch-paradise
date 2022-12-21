
export type gender = "female" | "male" | "both";

export interface IWatch {
  id: string;
  title: string;
  description?: string;
  isFeatured: boolean;
  price: number;
  gender: gender;
  productCode: string;
  image: string;
}

export type ProducType = IWatch;