import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../../ui/button/button";
import { extractBrands } from "../../../dummy-data";
import { gender } from "../../../models/general";
import {
  FilterContainer,
  FilterFormContainerStyled,
  FilterInputTitleStyled,
  FilterLabelStyled,
  FilterInputPriceStyled,
  FilterSubmitStyled,
} from "./styles";

type Inputs = {
  brands: string[];
  priceMin: number;
  priceMax: number;
  gender: gender;
};

enum FieldsEnum {
  brands = "brands",
  priceMin = "priceMin",
  priceMax = "priceMax",
  gender = "gender",
}

const Filter = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<Inputs>();

  const fetchedBrands = extractBrands();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("onSubmit:", data);

  const onClearClicked = (field: FieldsEnum) => {
    console.log("gnggngngnngngn", field);
    resetField(field);
  };

  return (
    <FilterContainer>
      <Button primary onClick={() => console.log("Ding!")}>
        Filter
      </Button>
      <FilterFormContainerStyled>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FilterInputTitleStyled>Brands:</FilterInputTitleStyled>
          {fetchedBrands.map((fetchedBrand) => (
            <FilterLabelStyled key={fetchedBrand}>
              <input
                type="checkbox"
                value={fetchedBrand}
                {...register("brands")}
              />
              {fetchedBrand}
            </FilterLabelStyled>
          ))}
          <FilterInputTitleStyled>Price:</FilterInputTitleStyled>
          <FilterLabelStyled>
            <span>min</span>
            <FilterInputPriceStyled type="number" {...register("priceMin")} />
          </FilterLabelStyled>
          <FilterLabelStyled>
            <span>max</span>
            <FilterInputPriceStyled type="number" {...register("priceMax")} />
          </FilterLabelStyled>
          <FilterInputTitleStyled>
            <span>Gender: </span>
            <Button
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault();
                onClearClicked(FieldsEnum.gender);
              }}
            >
              <Image
                src="/icons/cross.png"
                alt="clear"
                width={20}
                height={20}
              />
              reset
            </Button>
          </FilterInputTitleStyled>
          <FilterLabelStyled>
            <input type="radio" {...register("gender")} value="male" />
            Male
          </FilterLabelStyled>
          <FilterLabelStyled>
            <input type="radio" {...register("gender")} value="female" />
            Femle
          </FilterLabelStyled>
          <FilterSubmitStyled>
            <Button primary type="submit">
              Submit
            </Button>
          </FilterSubmitStyled>
        </form>
      </FilterFormContainerStyled>
    </FilterContainer>
  );
};

export default Filter;
