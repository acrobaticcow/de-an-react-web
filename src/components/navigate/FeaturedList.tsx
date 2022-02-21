import styled from "styled-components"
import LinkHolder from "../misc/LinkHolder";
import { Col } from "react-bootstrap";
import { accent, baseFontSize } from "../../rootStyledComponents";
import { UilPlus } from '@iconscout/react-unicons'
import { Menu, Dropdown } from "antd";

const Title = styled(LinkHolder)`
  display: block;
  font-family: "geometrix";
  font-size: 1.15em;
  font-weight: 500;
  margin-bottom: 1em;
`;
export const NavLinkHolder = styled(LinkHolder)`
  font-family: "geometrix";
  font-weight: 200;
  font-size: 0.97em;
  margin-bottom: 0.85em;
  opacity: 0.8;
  :hover {
    color: ${accent};
    opacity: 1;
  }
`;
const Wrapper = styled.div`
  display: block;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const PlusIcon = styled(UilPlus)`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export default ({ className }: {className: string}) => {
  return (
    <Col lg={4} className={className}>
    <Title name={"Featured"} />
    <List>
      <Item>
        <NavLinkHolder name={"Best Seller"} />
      </Item>
      <Item>
        <NavLinkHolder name={"New In"} />
      </Item>
      <Item>
        <NavLinkHolder name={"Back In Stock"} />
      </Item>
    </List>
  </Col>
  );
};

