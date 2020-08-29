import React, {useState} from "react";
import styled from "@emotion/styled";
import MenuButton from "../MenuButton";
import logo from '../../assets/images/logo.svg'
import {ROUTES} from "../../ROUTES";
import {Link} from "react-router-dom";
import Button from "../Button";
import SignInDialog from "./dialogs/SignInDialog";

const Root = styled.div`
display: flex;
margin-bottom: 30px;
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
const Logo = styled.img`
margin-top: 32px;
`

const Header: React.FC = () =>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <Root>
        <Menu>
            <MenuButton href={ROUTES.FAQ} text="FAQ"/>
            <MenuButton href={ROUTES.ABOUT} text="About"/>
            <MenuButton href={ROUTES.BLOG} text="Blog"/>
            <MenuButton href={ROUTES.DOCS} text="Docs"/>
            <Button onClick = {handleOpen}>Sign In</Button>
        </Menu>
        <Link to={ROUTES.ROOT}><Logo src={logo} alt="Logo"/></Link>
        <SignInDialog open={open} onClose={handleClose}/>
    </Root>
}


export default Header;
