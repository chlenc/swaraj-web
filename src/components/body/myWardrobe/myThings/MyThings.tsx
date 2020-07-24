import React from "react";
import styled from "@emotion/styled";
import MenuWardrobe from "../MenuWardrobe";
import MyGood from "./MyGood";
import LogedIn from "../LogedIn";

const Root = styled.div`
`
const Things = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`
const MyThings: React.FC =() => <Root>
    <LogedIn/>
    <MenuWardrobe/>
    <Things>
        <MyGood/>
        <MyGood/>
        <MyGood/>
        <MyGood/>
    </Things>
</Root>

export default MyThings;