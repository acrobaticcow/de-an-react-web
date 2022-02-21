import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Item = styled(Menu.Item)``;
const LinkRouter = styled(Link)``;

export default ({children, location}) => {
    return (
            <Item>
                {children}
            </Item>
    )
}