import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const Title = styled.h3``;
const Content = styled.p``;

export default ({ title, content }) => {
  <Col>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Col>;
};

