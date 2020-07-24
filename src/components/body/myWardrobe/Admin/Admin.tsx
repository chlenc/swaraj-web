/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import LogedIn from "../LogedIn";
import MenuWardrobe from "../MenuWardrobe";
import good from '../../../../assets/images/good.png'
import Input from "../../../Input";
import Button from "../../../Button";
import {css, jsx} from "@emotion/core";
import PublishedItem from "./PublishedItem";

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-family: Roboto Mono, monospace;
font-weight: normal;
font-size: 14px;
line-height: 16px;
`
const Title = styled.div`
margin-bottom: 28px;
`
const AddItem = styled.div`
display: flex;
`
const ItemImg = styled.img`
max-width: 436px;
`
const Info = styled.div`
display: flex;
flex-direction: column;
`
const InputBox = styled.div`
padding: 23px 0;
display: flex;
flex-direction: column;
margin: -16px;
&>*{
margin: 16px;}
`
const ButtonBox = styled.div`
margin: -22px;
&>*{
margin: 22px;
}
`
const Admin: React.FC =() => <Root>
    <LogedIn/>
    <MenuWardrobe/>
    <Title>Create New Item</Title>
    <AddItem>
        <ItemImg src={good} alt = 'Good'/>
        <Info>
            <InputBox>
                <Input placeholder = "Enter title"/>
                <Input placeholder = "Enter description"/>
                <Input placeholder = "Enter quantity"/>
            </InputBox>
            <ButtonBox>
                <Button>Upload 3d Preview</Button>
                <Button>Upload Real World Preview</Button>
                <Button>Upload PNG File</Button>
                <Button>Upload Asset Package</Button>
            </ButtonBox>
        </Info>
    </AddItem>
    <Button css = {css`border: 0; background: #CBE5CC; margin: 40px 0 60px 0;`}>Publish Item</Button>
    <Title>Published items</Title>
    <PublishedItem/>
    <PublishedItem/>
    <PublishedItem/>
</Root>

export default Admin;