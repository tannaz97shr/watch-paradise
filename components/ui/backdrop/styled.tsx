import styled from "styled-components";

interface BackdropStyledProps {
    isOpen: boolean;
}

export const BackdropStyled = styled.div<BackdropStyledProps>`
  background: rgba(0, 0, 0, .5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  display: ${props => props.isOpen ? "flex" : "none"};
`;
