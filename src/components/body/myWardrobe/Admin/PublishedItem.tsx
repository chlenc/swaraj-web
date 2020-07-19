import React from "react";
import styled from "@emotion/styled";
import good from '../../../../assets/images/good.png'
import SizedBox from "../../../SizedBox";
import Button from "../../../Button";

const Root = styled.div`
display: flex;
margin-bottom: 66px;
font-weight: normal;
font-size: 12px;
line-height: 16px;
`
const Item = styled.img`
max-width: 181px;
height: auto;
`
const Info = styled.div`
`
const Description = styled.div`
max-width: 715px;
`
const ButtonBox = styled.div`
display: flex;
margin: -8px;
&>*{
margin: 8px;
}
`
const PublishedItem: React.FC = () =><Root>
    <Item src ={good} alt = "Good"/>
    <Info>
        <div>Title: Swaraj #3333 tee   </div>
        <SizedBox height={20}/>
        <Description>Description: Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </Description>
        <SizedBox height={20}/>
        <div>
            Quantity: 499 (32)
        </div>
        <SizedBox height={20}/>
        <ButtonBox>
            <Button>Unpublish</Button>
            <Button>Edit</Button>
            <Button>Download Asset</Button>
            <Button>View Smart Contract</Button>
        </ButtonBox>
    </Info>
</Root>

export default PublishedItem;