import styled from "styled-components";
import { device, theme } from "../../../constants/theme";

// export const FilterButton

export const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem;

  & .active {
    left: 0
  }
`;

export const FilterFormContainerStyled = styled.div`
  background: salmon;
  position: fixed;
  width: 16rem;
  height: 100vh;
  z-index: 5;
  box-shadow: 0 2px 8px ${theme.secondColor};
  transition: all 0.3s ease-in-out;
  top: 4rem;
  left: -20rem;
  background: ${theme.secondColor};
  box-shadow: 0 2px 8px ${theme.secondColor};
  color: ${theme.fourthColor};
  display: flex;
  padding: 0.5rem;

  @media only screen and ${device.lg} {
  }
`;

export const FilterInputTitleStyled = styled.div`
  font-weight: bold;
  margin-top: 1rem;
  display: flex;
  align-items: center;
`;

export const FilterLabelStyled = styled.label`
  display: flex;
  & span {
    min-width: 4rem;
  }
`;

export const FilterResetFieldStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const FilterInputPriceStyled = styled.input`
  width: 5rem;
  margin-left: 1rem;
`;

export const FilterSubmitStyled = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 2rem;
`;
