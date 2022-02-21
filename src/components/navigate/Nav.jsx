import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  baseFontSize,
  accent,
  height,
  borderRadiusSmall,
} from "../../rootStyledComponents";
import LinkHolder from "../misc/LinkHolder";
import SubHeaderStyled, { SubHeader } from "./SubHeader";
import {
  UilUserCircle,
  UilSearch,
  UilShoppingBag,
  UilBars,
} from "@iconscout/react-unicons";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import MainNavLinkHolders from "../misc/MainNavLinkHolders";
const logoUrl =
  "https://cdn.shopify.com/s/files/1/0665/2889/files/Thesus_A_W_Wordmark_Forest_Green_2cca776c-1727-4416-868a-fa72e7359f08.png?v=1635783797";

const Logo = styled.img`
  max-width: min(195px, 100%);
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left center;
`;

const Nav = styled.nav`
  height: 100%;
`;

const Header = styled.header`
  position: relative;
  padding: 0 ${baseFontSize};
  height: ${height};
  min-height: max(${height}, 4em);
`;

const HeaderIcons = styled.div`
  display: flex;
  * {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 4px;
  }
  @media (max-width: 768px) {
    & > *:first-of-type {
      display: none;
    }
  }
`;

const Dflex = styled.div`
  display: flex;
`;
// const CollapseIcon = styled(UilBars)`
//   display: none;
//   width: 48px;

//   @media (max-width: 768px) {
//     display: flex;
//     align-self: center;
//   }
// `;

export default () => {
  // const [display, setDisplay] = useState(false);
  // const toggleDisplay = () => setDisplay(!display);
  // console.log(display);
  return (
    <>
      <Header className="fg-reg d-flex align-items-center justify-content-between">
        <Link
          className=" order-md-1 order-2  "
          style={{ maxWidth: "min(195px, 100%)" }}
          to="/"
        >
          <Logo src={logoUrl} alt="the sus" />
        </Link>
        <Nav className="d-flex order-md-2 order-1">
          {/* <CollapseIcon onClick={toggleDisplay} /> */}
          <MainNavLinkHolders  />
          {/* <MainNavLinkHolder display={open} name="Shop" /> */}
          {/* <SubHeaderStyled /> */}
          {/* <MainNavLinkHolder display={open} name="Values" /> */}
        </Nav>
        <HeaderIcons className="order-md-3 order-3  ">
          <UilUserCircle />
          <UilSearch />
          <UilShoppingBag />
        </HeaderIcons>
      </Header>
    </>
  );
};
