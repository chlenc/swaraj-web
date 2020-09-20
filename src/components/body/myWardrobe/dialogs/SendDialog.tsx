import React, {useState} from "react";
import styled from "@emotion/styled";
import Button from "../../../Button";
import Input from "../../../Input";
import DialogMaterial, {IDialogProps} from "../../../DialogMaterial";
import SentDialog from "./SentDialog";

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
interface IProps extends IDialogProps{
}
const SendDialog: React.FC<IProps> = ({open, onClose}) =>{
    const [status, setOpen] = useState(false)

    return <DialogMaterial open={open} onClose={onClose}>
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
                <Button onClick={()=>onClose('false')}>Cancel</Button>
                <Button onClick={() => setOpen(true)}>Send</Button>
            </ButtonBox>
        </Root>
        <SentDialog open={status} onClose={() => setOpen(false)}/>
    </DialogMaterial>
}

export default SendDialog;
