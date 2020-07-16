/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import good from "../../../assets/images/good.png"
import {css,jsx} from "@emotion/core";
import Button from "../../Button";
import {ROUTES} from "../../../ROUTES";
import {Link} from "react-router-dom";
import Size from "../Sixe";


const Root = styled.div`
display: flex;
justify-content: center;
margin: 45px 0;
font-size: 12px;
line-height: 16px;
color: #19191D;
text-align: center;
`
const GoodImgs = styled.div`
`
const GoodInfo = styled.div`
width: 30%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 97px;
`
const GoodName = styled.div`
font-size: 18px;
line-height: 24px;
`
const Description = styled.div`
margin: 31px 0 47px 0;
`
const Details =styled.div`
background: #ECF7ED;
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 5px;
padding: 23px 25px;
margin-bottom: 40px;
`
const SizeChoose = styled.div`
display: flex;
margin: -6px;
& > *{
margin: 6px;
}
`

const Price = styled.div`
margin-top: 46px;
margin-bottom: 44px;
font-family: Roboto Mono, monospace;
font-weight: normal;
font-size: 14px;
line-height: 16px;
color: #19191D
`
export default class Good extends React.Component{
    render(): React.ReactNode {
        return <Root>
            <GoodImgs>
                <img src={good} alt=""/>
            </GoodImgs>
            <GoodInfo>
                <GoodName>
                    DEMO TSHIRT
                </GoodName>
                <Description>
                    Cras mattis consectetur purus sit amet fermentum.
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                </Description>
                <Details>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </Details>
                <SizeChoose>
                    <Size>M</Size>
                    <Size css = {css` border: 1px solid #4A4B57`}>L</Size>
                    <Size css = {css`color: #E1E1E3;`}>XL</Size>
                    <Size>XXL</Size>
                    <Size css = {css`text-decoration: underline;`}>Sizing</Size>
                </SizeChoose>
                <Price>Price: 49 USD (0.27 ETH)</Price>
                <Button css = {css`background:#CBE5CC; border: 0;`}>
                    <Link to={ROUTES.BUY}>Buy</Link></Button>
            </GoodInfo>
        </Root>;
    }
}


