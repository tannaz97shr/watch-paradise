import styled from "styled-components";
import Link from "next/link";

import { theme } from "../../constants/theme";

export const MainStyled = styled.div`
  margin-top: 4.25rem;
`;

export const HeaderStyled = styled.header`
  background: ${theme.secondColor};
  box-shadow: 0 2px 2px ${theme.secondColor};
  margin-bottom: 1rem;
  width: 100%;
  height: 4rem;
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  & .active {
    left: 0;
  }
`;

export const HeaderUlStyled = styled.ul`
  list-style: none;
  width: 16rem;
  position: fixed;
  top: 3rem;
  left: -20rem;
  z-index: 5;
  height: 100vh;
  background: ${theme.secondColor};
  box-shadow: 0 2px 8px ${theme.secondColor};
  padding-top: 2rem;
  transition: all 0.3s ease-in-out;
  & li {
    margin-bottom: 0.5rem;
  }
`;

export const HeaderLogoContainerStyled = styled.div`
  padding: 0.75rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

export const HeaderLinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${theme.fifthColor};
  font-weight: bold;
  font-size: 1.2rem;
  & span {
    margin-left: 0.25rem;
    color: ${theme.fourthColor};
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 0 8px 8px ${theme.fourthColor}55;
  }
`;

export const IconBurbgerMenuStyled = styled.div`
  position: absolute;
  left: 0.5rem;
`;
