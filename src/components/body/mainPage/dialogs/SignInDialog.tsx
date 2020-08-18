import React from "react";
import styled from "@emotion/styled";
import Dialog from "../../../Dialog";
import SizedBox from "../../../SizedBox";
import Button from "../../../Button";
import {ROUTES} from "../../../../ROUTES";
import {Link} from "react-router-dom";

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding-top: 5px;
font-weight: normal;
line-height: 16px;
margin: -17px;
&>*{
margin: 17px;
}
`
const Title =styled.div`
font-family: Roboto Mono,monospace;
font-size: 14px;
`
const Text = styled.div`
font-size: 12px;
`
const SignIn: React.FC = () =>
    <Dialog>
    <Root>
        <Title>
            Connect Your Wallet
        </Title>
        <Text>
            Swaraj is a thing of a Web 3 era. This means we don’t manage your passwords.
            This also means shitty mobile experience yet.
            <SizedBox height={20}/>
            In order to have a digital item delivered you need to have an Ethereum address and Metamask installed.
            <SizedBox height={20}/>
            Don’t Worry, it’s easy.
        </Text>
        <Button>
            <Link to={ROUTES.INSTALLMETAMASK}>Install Metamask</Link>
        </Button>
    </Root>
</Dialog>

export default SignIn;