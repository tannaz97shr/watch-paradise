import { useState, Fragment } from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "../../ui/button/button";
import Backdrop from "../../ui/backdrop/backdrop";
import { extractBrands } from "../../../dummy-data";
import {
  FilterContainer,
  FilterFormContainerStyled,
  FilterInputTitleStyled,
  FilterLabelStyled,
  FilterInputPriceStyled,
  FilterSubmitStyled,
  FilterResetFieldStyled,
} from "./styles";
import { Inputs } from "../types";

enum FieldsEnum {
  brands = "brands",
  priceMin = "priceMin",
  priceMax = "priceMax",
  gender = "gender",
}

interface FilterProps {
  onFilterHandler: (params: Inputs) => void;
}

const Filter = (props: FilterProps) => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<Inputs>();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const fetchedBrands = extractBrands();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    props.onFilterHandler({
      brands: data.brands,
      gender: data.gender,
      priceMin: data.priceMin,
      priceMax: data.priceMax,
    });
  };
  const onClearClicked = (field: FieldsEnum) => {
    resetField(field);
  };

  const cancelFilter = () => {
    setIsFilterOpen(false);
  };

  return (
    <Fragment>
      <Backdrop isOpen={isFilterOpen} onClick={cancelFilter} />
      <FilterContainer>
        <Button primary onClick={() => setIsFilterOpen(true)}>
          Filter
        </Button>
        <FilterFormContainerStyled className={isFilterOpen ? "active" : ""}>
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
              <FilterResetFieldStyled
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
              </FilterResetFieldStyled>
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
              <Button
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.preventDefault();
                  cancelFilter();
                }}
              >
                Cancel
              </Button>
              <Button primary type="submit">
                Submit
              </Button>
            </FilterSubmitStyled>
          </form>
        </FilterFormContainerStyled>
      </FilterContainer>
    </Fragment>
  );
};

export default Filter;
