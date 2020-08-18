import React from "react";
import styled from "@emotion/styled";
import Dialog from "../../../Dialog";
import Button from "../../../Button";
import {ROUTES} from "../../../../ROUTES";
import {Link} from "react-router-dom";

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding-top: 5px;
font-family: Roboto Mono,monospace;
font-weight: normal;
font-size: 14px;
line-height: 16px;
margin: -22px;
&>*{
margin: 22px;
}
`
const Title =styled.div`
`
const Text = styled.div`
`
const SentDialog: React.FC = () =><Dialog>
    <Root>
        <Title>
            Your transaction has started
        </Title>
        <Text>
            The Ethereum network is processing your transaction, which can take a little while.
            We'll send you an e-mail when it goes through
        </Text>
        <Button>
            <Link to={ROUTES.MYTHINGS}>Ok</Link>
        </Button>
    </Root>
</Dialog>

export default SentDialog;
