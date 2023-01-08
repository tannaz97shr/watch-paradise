import styled from "styled-components";
import Link from "next/link";

import { theme } from "../../../constants/theme";

interface ButtonProps {
  primary?: boolean;
}

export const LinkButtonStyled = styled(Link)<ButtonProps>`
  text-decoration: none;
  color: ${(props) => (props.primary ? theme.secondColor : theme.fourthColor)};
  background: ${(props) =>
    props.primary ? theme.fourthColor : theme.secondColor};
  display: flex;
  width: fit-content;
  padding: 0.35rem;
  border-radius: 5px;
  font-weight: bold;
  border: none;
`;

export const ButtonStyled = styled.button<ButtonProps>`
  text-decoration: none;
  color: ${(props) => (props.primary ? theme.secondColor : theme.fourthColor)};
  background: ${(props) =>
    props.primary ? theme.fourthColor : theme.secondColor};
  display: flex;
  border: 1px solid
    ${(props) => (props.primary ? theme.secondColor : theme.fourthColor)};
  width: fit-content;
  padding: 0.35rem;
  border-radius: 5px;
  font-weight: bold;
  border: none;
`;
