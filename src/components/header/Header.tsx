import React from "react";
import styled from "@emotion/styled";
import MenuButton from "../MenuButton";
import {ROUTES} from "../../ROUTES";

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
line-height: 114%;
    letter-spacing: 0.054em;
    text-transform: capitalize;
    color: #4A4B57;
`


const Header: React.FC = () =>
    <Root>
        <MenuButton href={ROUTES.ADMIN} text="Admin"/>
    </Root>

export default Header;
