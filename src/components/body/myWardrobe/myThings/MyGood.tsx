/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import good from '../../../../assets/images/good.png'
import Button from "../../../Button";
import {css, jsx} from "@emotion/core";

const Root = styled.div`
& img{
max-width: 608px;
height: auto;
}
`
const GoodName = styled.div`
padding: 24px 0 18px 42px;
font-size: 18px;
line-height: 24px;
`
const ButtonBox = styled.div`
max-width: 350px;
padding-left: 42px;
display: flex;
flex-wrap: wrap;
margin: -9px;
&>*{
margin: 9px;
border: 0;
background: #CBE5CC;
font-family: Oxygen Mono,monospace;
font-weight: normal;
font-size: 14px;
line-height: 114%;
}
`

const MyGood: React.FC = () =><Root>
    <img src={good} alt="Good"/>
    <GoodName>DEMO TSHIRT</GoodName>
    <ButtonBox>
        <Button>Send</Button>
        <Button>Download Assets</Button>
        <Button css = {css`background: #F7F7FA; color: #B4B4BB; border: 0;`}>Sell</Button>
        <Button>View on Etherscan</Button>
    </ButtonBox>
</Root>

export default MyGood;