import { Fragment } from "react";

import MainHeader from "./main-header";
import { MainStyled } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <Fragment>
      <MainHeader />
      <MainStyled>{props.children}</MainStyled>
    </Fragment>
  );
};

export default Layout;
