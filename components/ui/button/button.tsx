import { LinkButtonStyled, ButtonStyled } from "./styled";

interface ButtonProps {
  link?: string;
  children: React.ReactNode;
  primary?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  type?: "button" | "submit" | "reset";
}

const Button = (props: ButtonProps) => {
  if (props.link)
    return (
      <LinkButtonStyled primary={props.primary} href={props.link}>
        {props.children}
      </LinkButtonStyled>
    );
  if (props.type)
    return (
      <ButtonStyled type={props.type} primary={props.primary}>
        {props.children}
      </ButtonStyled>
    );
  return (
    <ButtonStyled onClick={props.onClick} primary={props.primary}>
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
