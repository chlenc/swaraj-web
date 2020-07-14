import React from "react";
import styled from "@emotion/styled";
import {ROUTES} from "../../../ROUTES";
import MenuButton from "../../MenuButton";

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Menu = styled.div`
margin: 42px 0;
display: flex;
padding: -15px;
&>*{
padding: 15px;
}
`

const CustomerCare: React.FC = () => <Root>
                <Menu>
                    <MenuButton href={ROUTES.HOWtoSHOP} text="How To Shop"/>
                    <MenuButton href={ROUTES.PRODUCTINFO} text="Product Information"/>
                    <MenuButton href={ROUTES.PAYMENT} text="Payment"/>
                    <MenuButton href={ROUTES.DELIVERY} text="Delivery"/>
                    <MenuButton href={ROUTES.RETURNS} text="Returns"/>
                </Menu>
            </Root>
export default CustomerCare;