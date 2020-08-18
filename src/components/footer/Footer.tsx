import React from "react";
import styled from "@emotion/styled";
import MenuButton from "../MenuButton";
import Button from "../Button";
import Input from "../Input";
import {ROUTES} from "../../ROUTES";


const Root = styled.div`
display: flex;
font-size: 12px;
justify-content: center;
line-height: 114%;
letter-spacing: 0.054em;
text-transform: capitalize;
color: #4A4B57;
margin-top: 120px;
margin-bottom: 100px;
& img{
width: 30px;
height: auto;
}
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
margin: 0 -9px;
& > *{
  margin: 0 9px;
}
`
const SocNet = styled.a`
font-size: 12px;
line-height: 114%;
padding: 12px 16px;
letter-spacing: 0.054em;
text-transform: capitalize;
text-decoration: none;
color: #4A4B57;
`
const Subscribe = styled.div`
display: flex;
`
const Email = styled.div`
margin: 16px 34px 0 16px;
`


const Footer: React.FC = () =>
    <Root>
        <Menu>
            <MenuColumn>
                <MenuButton href={ROUTES.PRIVACYPOLICY} text='Privacy Policy'/>
                <MenuButton href={ROUTES.TERMSofSERVICE} text='Terms of Service'/>
            </MenuColumn>
            <MenuColumn>
                <MenuButton href={ROUTES.AUTHENTICATEanITEM} text='Authenticate An Item'/>
                <MenuButton href={ROUTES.DELIVERY} text='Customer Care'/>
                <a href="https://github.com/chlenc/swaraj-web">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" alt="img"/>
                </a>
            </MenuColumn>
        </Menu>
        <FeedBackBar>
            <SocNetBar>
                <SocNet href='https://twitter.com/'>Twitter</SocNet>
                <SocNet href='https://instagram.com/'>Instagram</SocNet>
            </SocNetBar>
            <Subscribe>
                <Email><Input placeholder="Enter your email" /></Email>
                <Button>Subscribe</Button>
            </Subscribe>
        </FeedBackBar>
    </Root>

export default Footer;
