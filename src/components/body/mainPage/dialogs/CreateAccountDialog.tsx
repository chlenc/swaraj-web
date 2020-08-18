import React from "react";
import styled from "@emotion/styled";
import Dialog from "../../../Dialog";
import Button from "../../../Button";
import Input from "../../../Input";
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
const Metamask = styled.div`
color: #43A047
`
const Text = styled.div`
font-size: 12px;
`
const CreateAccountDialog: React.FC = () =><Dialog>
    <Root>
        <Title>
            Connect Your Wallet
        </Title>
        <Text>
            Current Ethereum Address:
            <Metamask>0x7390c3027da93f014c4c90418ab7ad42054468e0</Metamask>
        </Text>
            <Input placeholder="Enter your e-mail"/>
        <Text>
            By clicking Create Acoount you indicate that you have read and confirm to our Terms of Service and Privacy Policy.
        </Text>
        <Button>
            <Link to={ROUTES.ROOT}>Create Account</Link>
        </Button>
    </Root>
</Dialog>

export default CreateAccountDialog;
