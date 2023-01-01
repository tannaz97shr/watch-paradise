import Link from "next/link";
import { ButtonStyled } from "./styled";

interface ButtonProps {
  link: string;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return <ButtonStyled href={props.link}>{props.children}</ButtonStyled>;
};

export default Button;
