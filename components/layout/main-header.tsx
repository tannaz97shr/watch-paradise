import { Fragment, useState } from "react";
import Image from "next/image";

import Backdrop from "../ui/backdrop/backdrop";
import {
  HeaderStyled,
  HeaderLogoContainerStyled,
  HeaderLinkStyled,
  HeaderUlStyled,
  IconBurbgerMenuStyled,
} from "./styles";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Fragment>
      <Backdrop isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <HeaderStyled>
        <IconBurbgerMenuStyled onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <Image src="/icons/cross.png" alt="menu" width={30} height={30} />
          ) : (
            <Image
              src="/icons/burger-menu.png"
              alt="menu"
              width={30}
              height={30}
            />
          )}
        </IconBurbgerMenuStyled>
        <HeaderLogoContainerStyled>
          <HeaderLinkStyled href="/">
            <Image src="/icons/diamond.png" alt="Logo" width={40} height={40} />
            <span>Paradise</span>
          </HeaderLinkStyled>
        </HeaderLogoContainerStyled>
        <HeaderUlStyled className={isMenuOpen ? "active" : ""}>
          <li>
            <HeaderLinkStyled
              onClick={() => setIsMenuOpen(false)}
              href="/products"
            >
              Products
            </HeaderLinkStyled>
          </li>
          <li>
            <HeaderLinkStyled
              onClick={() => setIsMenuOpen(false)}
              href="/about"
            >
              About
            </HeaderLinkStyled>
          </li>
        </HeaderUlStyled>
      </HeaderStyled>
    </Fragment>
  );
};

export default Header;
