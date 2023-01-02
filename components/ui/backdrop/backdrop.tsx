import { BackdropStyled } from "./styled";

interface BackdropProps {
  isOpen: boolean;
  onClick: () => void;
}

const Backdrop = (props: BackdropProps) => {
  return <BackdropStyled onClick={props.onClick} isOpen={props.isOpen} />;
};

export default Backdrop;
