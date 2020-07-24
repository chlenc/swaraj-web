import React from "react";
import styled from "@emotion/styled";
import LogedIn from "../LogedIn";
import MenuWardrobe from "../MenuWardrobe";
import MyHistoryThing from "./MyHistoryThing";

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const ViewHistory: React.FC =() => <Root>
    <LogedIn/>
    <MenuWardrobe/>
    <MyHistoryThing/>
    <MyHistoryThing/>
    <MyHistoryThing/>
</Root>

export default ViewHistory;