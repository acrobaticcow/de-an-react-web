import { Link } from "react-router-dom";
import styled from "styled-components";
import { baseFontSize } from "../../rootStyledComponents";
import { Button } from "react-bootstrap";

const StyledLink = styled(Link)`
  display: block;
  font-family: "geometrix";
  font-size: ${baseFontSize};
  background-color: #123026;
  color: #ffffff;
  border-width: 2px;
  border-radius: 37px;
  border: 0px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 11px 34px;
  max-width: 100%;
  transition: all 0.15s;
  animation-duration: 1s;
  :hover {
    background-color: #ef0000;
    color: #ffffff;
    cursor: pointer;
    animation-name: none !important;
  }
`;
export default ({ text, location, className }) => {
  return (
    <StyledLink className={className} as={"button"} to={location ?? "/"}>
      <span style={{ lineHeight: "1em" }}>{text}</span>
    </StyledLink>
  );
};
