/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import MenuButton from "../MenuButton";
import {css,jsx} from "@emotion/core";

const Footer: React.FC = () =>
    <Root>
        <Menu>
            <MenuColumn>
                <MenuButton href='/Privacy Policy' text='Privacy Policy'/>
                <MenuButton href='/Terms of Service' text='Terms of Service'/>
            </MenuColumn>
            <MenuColumn>
                <MenuButton href='/Authenticate An Item' text='Authenticate An Item'/>
                <MenuButton href='/Customer Care' text='Customer Care'/>
            </MenuColumn>
        </Menu>
        <FeedBackBar>
            <SocNetBar>
                <SocNet href='https://twitter.com/' css = {css`margin-right: 18px`}>Twitter</SocNet>
                <SocNet href='https://instagram.com/'>Instagram</SocNet>
            </SocNetBar>

        </FeedBackBar>

    </Root>

export default Footer;

const Root = styled.div`
display: flex;
font-size: 12px;
justify-content: center;
`
const Menu = styled.div`
display: flex;
`
const MenuColumn = styled.div`
`
const FeedBackBar = styled.div`
margin-left: 165px;
`
const SocNetBar = styled.div`
display: flex;
`
const SocNet = styled.a`
font-family: Oxygen Mono, monospace;
font-weight: normal;
font-size: 12px;
line-height: 114%;
padding: 12px 16px;
letter-spacing: 0.054em;
text-transform: capitalize;
text-decoration: none;
color: #4A4B57;
`
