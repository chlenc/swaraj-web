import React from "react";
import styled from "@emotion/styled";
import Button from "../../../Button";
import DialogMaterial, {IDialogProps} from "../../../DialogMaterial";

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
interface IProps extends IDialogProps{
}
const SentDialog: React.FC<IProps> = ({open, onClose}) =>
    <DialogMaterial open={open} onClose={onClose}>
    <Root>
        <Title>
            Your transaction has started
        </Title>
        <Text>
            The Ethereum network is processing your transaction, which can take a little while.
            We'll send you an e-mail when it goes through
        </Text>
        <Button onClick={(e)=>onClose('false')}>Ok</Button>
    </Root>
</DialogMaterial>

export default SentDialog;
