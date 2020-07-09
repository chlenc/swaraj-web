import React from "react";
import styled from "@emotion/styled";
import MenuButton from "../MenuButton";
import logo from '../../assets/images/logo.svg'

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Menu = styled.div`
padding-top: 59px;
display: flex;
font-size: 14px;
margin: -13px;
& > * {
 margin: 13px;
 }
`
const SignIn = styled.div`
border: 1px solid #4A4B57; 
box-sizing: border-box;
border-radius: 4px;
`
const Logo = styled.img`
margin: 32px;
background: ${logo} center no-repeat;
background-size: contain;//TODO FIX
`

const Header: React.FC = () =>
    <Root>
        <Menu>
            <MenuButton href="/FAQ" text="FAQ"/>
            <MenuButton href="/About" text="About"/>
            <MenuButton href="/Blog" text="Blog"/>
            <MenuButton href="/Docs" text="Docs"/>
            <SignIn><MenuButton href="/Sign_In" text="Sign In"/> </SignIn>
        </Menu>
        <Logo />
    </Root>

export default Header;
