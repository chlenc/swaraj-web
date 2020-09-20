import React, {useState} from "react";
import styled from "@emotion/styled";
import LogedIn from "./LogedIn";
import MenuWardrobe from "./MenuWardrobe";
import Button from "../../Button";
import SendDialog from "./dialogs/SendDialog";

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;

font-family: Roboto Mono,monospace;
font-weight: normal;
font-size: 14px;
line-height: 16px;

margin: -12px;
&>*{
margin: 12px;
}
`
const ETHBox = styled.div`
display: flex;
align-items: center;
`
const SWRJBox = styled.div`
display: flex;
`
const ButtonBox = styled.div`
padding-left: 123px;
display: flex;
margin: -5px;
&>*{
margin: 5px;
}`
const ViewWallet: React.FC =() => {
    const [open, setOpen] = useState(false)
    const handleOpen  = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return <Root>
        <LogedIn/>
        <MenuWardrobe/>
        <div>Your balance:</div>
        <ETHBox>
            <div>0,446423 ETH (~123 USD)</div>
            <ButtonBox>
                <Button>Receive</Button>
                <Button onClick={handleOpen}>Send</Button>
            </ButtonBox>
        </ETHBox>
        <SWRJBox>
            <div>1 SWRJ-1 (~439 USD)</div>
            <ButtonBox>
                <Button>Receive</Button>
                <Button onClick={handleOpen}>Send</Button>
            </ButtonBox>
        </SWRJBox>
        <SendDialog open={open} onClose={handleClose}/>
    </Root>
}

export default ViewWallet;