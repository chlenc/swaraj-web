import React from "react";
import styled from "@emotion/styled";
import good from '../../../../assets/images/good.png'

const Root = styled.div`
display: flex;
`
const GoodImg = styled.img`
max-width: 181px;
height: auto;
`
const InformationBox = styled.div`
margin-left: 23px;
font-family: Roboto Mono,monospace;
font-weight: normal;
font-size: 14px;
line-height: 16px;
padding: -10px;
&>*{
padding: 10px;
}
`
const Date = styled.div`
`
const TxidBox = styled.div`
display: flex;
`
const Txid= styled.div`
color: #43A047
`

const ID = styled.div`

`
const MyHistoryThing: React.FC = () =><Root>

    <GoodImg src ={good} alt ="GoodName"/>
    <InformationBox>
        <Date>a day ago</Date>
        <TxidBox>txid:&nbsp;<Txid>0xd133c490042546a1f6cc9a747fe34dc6</Txid></TxidBox>
        <ID>You received SWRJ T-Sh #0AΩ ID #224635815</ID>
    </InformationBox>
</Root>

export default MyHistoryThing;