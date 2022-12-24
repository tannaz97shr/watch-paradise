import styled from "styled-components";
import { theme, device } from "../../constants/theme";

export const ProductListStyled = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and ${device.lg} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ProductCardStyled = styled.div`
  display: flex;
  border: 1px solid ${theme.firstColor};
  border-radius: 5px;
  overflow: hidden;
  margin: 0.5rem;
  background: ${theme.fifthColor};
  @media only screen and ${device.lg} {
    flex-direction: column;
    width: 250px;
    height: 450px;
  }
`;

export const ProductContentStyled = styled.div`
  display: flex;
  flex: 1;
  background: ${theme.fifthColor};
  padding: 0.25rem 0.5rem;
  flex-direction: column;
`;

export const ImageContainerStyled = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  @media only screen and ${device.lg} {
    width: 250px;
    height: 250px;
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
  font-size: .75rem;
`;
