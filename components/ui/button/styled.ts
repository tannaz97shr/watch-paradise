import styled from "styled-components";
import Link from "next/link";

import { theme } from "../../../constants/theme";

export const ButtonStyled = styled(Link)`
  text-decoration: none;
  color: ${theme.fifthColor};
  background: ${theme.secondColor};
  display: flex;
  width: fit-content;
  padding: .35rem;
  border-radius: 5px;
`;
