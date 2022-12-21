import styled from "styled-components";
import { theme, device } from "../../constants/theme";

export const ProductListStyled = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and ${device.lg} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ProductCardStyled = styled.div`
  border: 1px solid ${theme.firstColor};
  border-radius: 5px;
  background-color: ${theme.fifthColor};
  width: 90%;
  margin: .5rem;
  @media only screen and ${device.lg} {
    flex-direction: row;
    max-width: 24%;
    min-width: 20%;
`;
