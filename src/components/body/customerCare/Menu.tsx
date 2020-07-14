import styled from "@emotion/styled";
import React from "react";
import MenuButton from "../../MenuButton";
import {ROUTES} from "../../../ROUTES";


const Root = styled.div`
margin: 42px 0;
display: flex;
justify-content: center;
padding: -15px;
&>*{
padding: 15px;
}
`

const Menu: React.FC = () =>
    <Root>
        <MenuButton href={ROUTES.HOWtoSHOP} text="How To Shop"/>
        <MenuButton href={ROUTES.PRODUCTINFO} text="Product Information"/>
        <MenuButton href={ROUTES.PAYMENT} text="Payment"/>
        <MenuButton href={ROUTES.DELIVERY} text="Delivery"/>
        <MenuButton href={ROUTES.RETURNS} text="Returns"/>
    </Root>
export default Menu;