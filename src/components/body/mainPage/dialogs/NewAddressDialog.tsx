import React from "react";
import styled from "@emotion/styled";
import Dialog from "../../../Dialog";
import SizedBox from "../../../SizedBox";
import Button from "../../../Button";
import {ROUTES} from "../../../../ROUTES";
import {Link} from "react-router-dom";
import Input from "../../../Input";

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
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
const ButtonBox = styled.div`
padding-top: 25px;
padding-bottom: 58px;
display: flex;
margin: -5px;
&>*{
margin: 5px;
}
`
const NewAddress: React.FC = () =>
    <Dialog>
    <Root>
        <Title>
            New delivery address
        </Title>
        <Input placeholder = "Full Name"/>
        <Input placeholder = "Street Address"/>
        <Input placeholder = "Town"/>
        <Input placeholder = "State"/>
        <Input placeholder = "Country"/>
        <Input placeholder = "Postcode"/>
        <Input placeholder = "Phone Number"/>
        <ButtonBox>
            <Button>
                <Link to={ROUTES.ROOT}>Cancel</Link>
            </Button>
            <Button>Create</Button>
        </ButtonBox>

    </Root>
</Dialog>

export default NewAddress;