import React from "react";
import styled from "@emotion/styled";
import MenuButton from "../MenuButton";
import logo from '../../assets/images/logo.svg'

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
line-height: 114%;
    letter-spacing: 0.054em;
    text-transform: capitalize;
    color: #4A4B57;
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
margin-top: 32px;
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
        <Logo src={logo} alt="Logo"/>
    </Root>

export default Header;
