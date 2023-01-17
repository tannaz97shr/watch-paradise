import styled from "styled-components";
import Image from "next/image";

import { theme, device } from "../../constants/theme";

export const ProductListStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and ${device.lg} {
    flex-direction: row;
    flex-wrap: wrap;
    width: 68rem;
    margin: auto;
  }
`;

export const ProductCardStyled = styled.div`
  display: flex;
  border: 1px solid ${theme.firstColor};
  border-radius: 5px;
  overflow: hidden;
  margin: 0.5rem;
  background: ${theme.fifthColor};
  box-shadow: 0 2px 8px ${theme.fifthColor}80;
  @media only screen and ${device.lg} {
    flex-direction: column;
    width: 250px;
    height: 450px;
  }
`;

export const ProductContentStyled = styled.div`
  display: flex;
  background: ${theme.fifthColor};
  padding: 0.25rem 0.5rem;
  flex-direction: column;
`;

export const ImageContainerStyled = styled.div`
  position: relative;
  height: 150px;
  width: 150px;
  flex: none;
  @media only screen and ${device.lg} {
    width: 250px;
    height: 250px;
    flex: none;
  }
`;

export const CardTitleStyled = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const CardDetailStyled = styled.div`
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
`;

export const CardButtonStyled = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: end;
`;

export const ProductDetailContainer = styled.div`
  @media only screen and ${device.lg} {
    width: 45rem;
    margin: auto;
  }
`;

export const ProductDetailsTitleStyled = styled.h2`
  color: ${theme.fourthColor};
  text-shadow: 1px 1px 2px ${theme.fifthColor};
  margin-left: 0.75rem;
`;

export const ProductDetailsLogisticsStyled = styled.div`
  background: ${theme.fifthColor};
  border-radius: 5px;
  overflow: hidden;
  padding: 0.5rem;
  margin: 0.25rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and ${device.lg} {
    flex-direction: row;
  }
`;

export const ProductDetailsImageStyled = styled.div`
  border: 2px solid ${theme.fourthColor};
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  flex: none;
`;

export const ProductDetailsContentStyled = styled.div`
  margin-top: 0.5rem;
  color: ${theme.firstColor};
  font-weight: 600;
  width: 100%;
  margin-left: 0.5rem;
  & span {
    color: black;
  }
  & div {
    margin-bottom: 0.5rem;
  }
`;

export const ProductDetailsDescriptionStyled = styled.div`
  margin: 1rem 0.75rem;
  color: ${theme.fifthColor};
  font-weight: 600;
`;
