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
font-family: Roboto Mono,monospace;
font-size: 14px;
font-weight: normal;
line-height: 16px;
margin: -16px;
&>*{
margin: 16px;
}
`
const Title = styled.div`
`
const Balance = styled.div`
margin-top: 4px;
`
const ButtonBox = styled.div`
padding-top: 25px;
padding-bottom: 58px;
display: flex;
margin: -5px;
&>*{
margin: 5px;
}
`
const Send: React.FC = () =>
    <Dialog>
        <Root>
            <Title>
                Your Balance
            </Title>
            <Balance>
                0,446423 ETH (~123 USD)
            </Balance>
            <Input placeholder="Amount"/>
            <Input placeholder="To Address"/>
            <ButtonBox>
                <Button>
                    <Link to={ROUTES.ROOT}>Cancel</Link>
                </Button>
                <Button>Send</Button>
            </ButtonBox>
        </Root>
    </Dialog>

export default Send;
