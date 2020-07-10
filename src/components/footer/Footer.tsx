import React from "react";
import styled from "@emotion/styled";
import MenuButton, {Button} from "../MenuButton";
import Input from "../Input";


const Root = styled.div`
display: flex;
font-size: 12px;
justify-content: center;
line-height: 114%;
letter-spacing: 0.054em;
text-transform: capitalize;
color: #4A4B57;
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
                <MenuButton href='/privacy_policy' text='Privacy Policy'/>
                <MenuButton href='/terms_of_service' text='Terms of Service'/>
            </MenuColumn>
            <MenuColumn>
                <MenuButton href='/authenticate_an_item' text='Authenticate An Item'/>
                <MenuButton href='/customer_care' text='Customer Care'/>
            </MenuColumn>
        </Menu>
        <FeedBackBar>
            <SocNetBar>
                <SocNet href='https://twitter.com/'>Twitter</SocNet>
                <SocNet href='https://instagram.com/'>Instagram</SocNet>
            </SocNetBar>
            <Subscribe>
                <Email><Input text="Enter your email" /></Email>
                <Button href={'/'} text="Subscribe"/>
            </Subscribe>
        </FeedBackBar>

    </Root>

export default Footer;
