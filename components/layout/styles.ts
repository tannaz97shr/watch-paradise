import styled from "styled-components";
import Link from "next/link";

import { device, theme } from "../../constants/theme";

// @media only screen and ${device.lg}

export const MainStyled = styled.div`
  margin-top: 4.25rem;
`;

export const HeaderStyled = styled.header`
  background: ${theme.secondColor};
  box-shadow: 0 2px 2px ${theme.secondColor};
  margin-bottom: 1rem;
  width: 100%;
  height: 4rem;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  & .active {
    left: 0;
  }
  @media only screen and ${device.lg} {
    display: flex;
    flex-direction: row;
    align-items: center;
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
  @media only screen and ${device.lg} {
    display: flex;
    position: static;
    margin: 0 0 0 6rem;
    padding: 0.5rem 0 0 0;
    flex: 1;
    height: 100%;
    align-items: center;
    box-shadow: none;
    & li {
      margin-right: 1.5rem;
      padding: 0.5rem;
      border-radius: 5px;
      &:hover {
        background: ${theme.fourthColor};
        & a {
          color: ${theme.secondColor};
        }
      }
    }
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
  color: ${theme.fourthColor};
  font-weight: bold;
  font-size: 1.2rem;
  & span {
    margin-left: 0.25rem;
    color: ${theme.fourthColor};
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 0 8px 8px ${theme.fourthColor}55;
  }
  @media only screen and ${device.lg} {
    margin-right: auto;
  }
`;

export const IconBurbgerMenuStyled = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 1rem;
  @media only screen and ${device.lg} {
    display: none;
  }
`;
