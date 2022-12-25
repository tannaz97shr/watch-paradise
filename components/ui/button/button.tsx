import Link from "next/link";
import { ButtonStyled } from "./styled";

interface ButtonProps {
  link: string;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <Link href={props.link}>
      <ButtonStyled>{props.children}</ButtonStyled>
    </Link>
  );
};

export default Button;

