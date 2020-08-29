import React, {useState} from "react";
import styled from "@emotion/styled";
import SizedBox from "../../SizedBox";
import Button from "../../Button";
import DialogMaterial, {IDialogProps} from "../../DialogMaterial";
import CreateAccountDialog from "./CreateAccountDialog";

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
interface IProps extends IDialogProps{
}
const SignInDialog: React.FC<IProps> = ({open,onClose}) =>{
    const [status, setStatus] = useState(false)
    const handleOpen = () => setStatus(true)
    const handleClose = () => setStatus(false)

    return <DialogMaterial open={open} onClose={onClose}>
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
            <Button onClick={handleOpen}>Install Metamask</Button>
        </Root>
        <CreateAccountDialog open={status} onClose={handleClose}/>
    </DialogMaterial>
}


export default SignInDialog;
