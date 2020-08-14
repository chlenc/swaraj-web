import React from "react";
import styled from "@emotion/styled";
import good from '../../../assets/images/good.png'
import SizedBox from "../../SizedBox";
import Button from "../../Button";
import DataStore, {IItem} from "../../../stores/DataStore";
import {inject, observer} from "mobx-react";

interface IOneItem {
    item: IItem;
    adminStore?: DataStore;
}
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

const PublishedItem: React.FC<IOneItem> = observer((adminStore, item) =><Root>
    <Item src ={good} alt = "Good"/>
    <Info>
        <div>Title: {item.title}  </div>
        <SizedBox height={20}/>
        <Description>
            {item.description}
        </Description>
        <SizedBox height={20}/>
        <div>
            Quantity: {item.quantity}
        </div>
        <SizedBox height={20}/>
        <ButtonBox>
            <Button>Unpublish</Button>
            <Button>Edit</Button>
            <Button>Download Asset</Button>
            <Button>View Smart Contract</Button>
        </ButtonBox>
    </Info>
</Root>)

export default PublishedItem;