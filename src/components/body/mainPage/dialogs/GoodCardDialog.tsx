/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import Dialog from "../../../Dialog";
import good from "../../../../assets/images/good.png"
import Size from "../../Size";
import {css,jsx} from "@emotion/core";
import Button from "../../../Button";
import {ROUTES} from "../../../../ROUTES";
import {Link} from "react-router-dom";

const Root = styled.div`
margin: 10px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;

font-weight: normal;
`
const Tytle = styled.div`
font-size: 18px;
line-height: 24px;
`
const Good = styled.img`
width: 426px;
height: 426px;
`
const SizeBox = styled.div`
display: flex;
margin: -6px;
& > *{
margin: 6px;
border: 1px solid #4A4B57;
}
`
const Price = styled.div`
margin-top: 28px;
margin-bottom: 38px;
font-family: Roboto Mono,monospace;
font-size: 14px;
line-height: 16px;
`
const NoMoney = styled.div`
color:#F44336;
`
const DeliveryBox = styled.div`
display: flex;
margin: -12px;
& > *{
margin: 12px;
}
`
const DeliveryTytle = styled.div`
margin-bottom: 16px;
font-family: Roboto Mono,monospace;
font-size: 14px;
line-height: 16px;
`
const NewAddress = styled.div`
`
const Input = styled.textarea`
width: 268px;
height: 150px;
padding: 15px 19px;

font-family: Oxygen Mono, monospace;
line-height: 16px;
font-size: 12px; 

border: 1px solid rgba(0, 0, 0, 0.36);
box-sizing: border-box;
outline: none;
color: #4A4B57;
transition: all .15s ease;

&:hover{
border: 2px solid #CBE5CC;
}
&:focus{
border: 2px solid #43A047;
}    
`

const ButtonBox = styled.div`
display: flex;
padding-top: 38px;
margin: -9px;
&>*{
margin: 9px;
}
`
const GoodCardDialog: React.FC = () =>
    <Dialog>
    <Root>
    <Tytle> Buy SWRJ T-Sh #0AΩ </Tytle>
        <Good src={good}/>
        <SizeBox>
            <Size>Turqoise Blue</Size>
            <Size>L</Size>
        </SizeBox>
        <Price>
            Price: 449 USD (2,70 ETH)
            <NoMoney>You don’t have enough funds</NoMoney>
        </Price>
        <DeliveryTytle>Delivery Address</DeliveryTytle>
        <DeliveryBox>
            <NewAddress>
                <Input name="text" wrap="soft" placeholder="Gleb Sychev,Vavilova, 73-9, Moscow, Moskva g. 117335, Russian Federation"/>
                <Button css = {css`margin-top: 21px`}>
                    <Link to={ROUTES.NEWADRESS}>New Delivery Address</Link>
                </Button>
            </NewAddress>
                <Input value ="Gleb Sychev Dlinnofamilievich Mladshiy, Huilova Prospekt Ogromniy Adress Blyat, 42-0,Moscow, Moskva g. 117335, Russian Federation"/>
        </DeliveryBox>
        <ButtonBox>
            <Button>
                <Link to={ROUTES.ROOT}>Cancel</Link>
            </Button>
            <Button css = {css`border: 0; background: #CBE5CC;`}>Buy</Button>
        </ButtonBox>
    </Root>
    </Dialog>

export default GoodCardDialog;
