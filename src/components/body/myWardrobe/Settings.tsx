/** @jsx jsx*/
import React from "react";
import styled from "@emotion/styled";
import LogedIn from "./LogedIn";
import MenuWardrobe from "./MenuWardrobe";
import Button from "../../Button";
import {css, jsx} from "@emotion/core";

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;

font-family: Roboto Mono,monospace;
font-weight: normal;
font-size: 14px;
line-height: 16px;

margin: -12px;
&>*{
margin: 12px;
}
`
const Email = styled.div`
display: flex;
align-items: center;
`
const AddressBox = styled.div`
display: flex;
align-items: center;
`
const ButtonBox = styled.div`
padding-left: 123px;
display: flex;
margin: -5px;
&>*{
margin: 5px;
}`
const ViewWallet: React.FC =() => <Root>
    <LogedIn/>
    <MenuWardrobe/>
    <Email>
        <div>Email: sychevgleb@gmail.com</div>
        <Button css = {css`margin-left: 79px`}>Change Email</Button>
    </Email>
    <AddressBox>
        <div>
            <div>Gleb Sychev,</div>
            <div>Vavilova,73-9,</div>
            <div>Moscow, Moskva g.</div>
            <div>117335,</div>
            <div>Russian Federation</div>
        </div>
        <ButtonBox>
            <Button>Receive</Button>
            <Button>Send</Button>
        </ButtonBox>
    </AddressBox>
    <AddressBox>
        <div>
            <div>Gleb Sychev Dlinnofamilievich,</div>
            <div>Mladshiy,</div>
            <div>Huilova Prospekt Ogromniy</div>
            <div>Adress Blyat, 42-0</div>
            <div>Vavilova,73-9,</div>
            <div>Moscow, Moskva g.</div>
            <div>117335,</div>
            <div>Russian Federation</div>
        </div>
        <ButtonBox>
            <Button>Receive</Button>
            <Button>Send</Button>
        </ButtonBox>
    </AddressBox>
</Root>

export default ViewWallet;