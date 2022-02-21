import styled from "styled-components";
import LinkHolder from "../misc/LinkHolder";
import { Row, Col as ColBs } from "react-bootstrap";
import { accent } from "../../rootStyledComponents";
import Featured from "./FeaturedList";
import Item from "../misc/DropDownItemAntd";
import { Menu, Dropdown } from "antd";


const Title = styled.div`
  font-family: "geometrix";
  font-size: 1.15em;
  font-weight: 500;
  margin-bottom: 1em;
`;

const NavLinkHolder = styled(LinkHolder)`
  font-size: 0.97em;
  margin-bottom: 0.85em;
  opacity: 0.8;
  :hover {
    color: ${accent};
  }
`;

export const SubHeader = styled.div`
  position: absolute;
  font-family: "geometrix";
  padding: 16px 24px;
  width: 100%;
  left: 0;
  background-color: white;
  transform: translateX(0%) translateY(10%);
  max-height: 70vh;
  overflow: auto;
  padding: 1.5rem 1rem;
  top: 80%;
  opacity: 0;
  pointer-events: none;
  :hover{
    transform: translateX(0%) translateY(-0%);
    opacity: 1;
    pointer-events: all;
  }
;
`;
const Col = styled(ColBs)`
padding: 0 12px;
`



export default ({className}) => {
  return (
    <SubHeader className={className} >
      <Row>
        {/* <Col lg={4} className="featured mb-3">
          <Title>Featured</Title>
          <NavLinkHolder name={"Best Seller"} />
          <NavLinkHolder name={"New In"} />
          <NavLinkHolder name={"Back In Stock"} />
        </Col> */}
        <Featured className="mb-3"/>
        <Col lg={8} className="brand">
          <Title>Popular Brand</Title>
          <Row>
            <Col sm={2}>
              <NavLinkHolder name={"Addidas"} />
              <NavLinkHolder name={"Nike"} />
              <NavLinkHolder name={"Converse"} />
            </Col>
            <Col sm={2} lg={4}>
              <NavLinkHolder name={"Martin"} />
              <NavLinkHolder name={"Something"} />
              <NavLinkHolder name={"I Dont Know"} />
            </Col>
          </Row>
        </Col>
      </Row>
    </SubHeader>
  );
};
