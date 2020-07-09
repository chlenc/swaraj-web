import React from "react";
import styled from "@emotion/styled";
import MenuButton from "../MenuButton";
import logo from '../../assets/images/logo.svg'

const Header: React.FC = () =>
    <Root>
        <Menu>
            <MenuButton href='/FAQ' text={'FAQ'}/>
            <MenuButton href='/About' text={'About'}/>
            <MenuButton href='/Blog' text={'Blog'}/>
            <MenuButton href='/Docs' text={'Docs'}/>
            <SignIn> <MenuButton href='/Sign_In' text={'Sign In'}/> </SignIn>
        </Menu>
        <Logo>
            <img src={logo} alt="SWARAJ"/>
        </Logo>
    </Root>

export default Header;

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Menu = styled.div`
padding-top: 59px;
display: flex;
margin: -13px;
 & > * {
 
 font-size: 14px;
 margin: 13px;
 }
`
const SignIn = styled.div`
border: 1px solid #4A4B57; 
box-sizing: border-box;
border-radius: 4px;
`
const Logo = styled.div`
margin: 32px;
`