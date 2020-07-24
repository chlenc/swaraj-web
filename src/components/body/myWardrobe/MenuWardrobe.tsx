import styled from "@emotion/styled";
import React from "react";
import {ROUTES} from "../../../ROUTES";
import MenuButton from "../../MenuButton";


const Root = styled.div`
margin: 30px 0 ;
display: flex;
justify-content: center;
padding: -15px;
&>*{
padding: 15px;
}
`
const MenuWardrobe: React.FC = () =>
    <Root>
        <MenuButton href={ROUTES.MYTHINGS} text="My Things"/>
        <MenuButton href={ROUTES.VIEWHISTORY} text="View History"/>
        <MenuButton href={ROUTES.VIEWWALLET} text="View Wallet"/>
        <MenuButton href={ROUTES.SETTINGS} text="Settings"/>
        <MenuButton href={ROUTES.ADMIN} text="Admin"/>
    </Root>
export default MenuWardrobe;