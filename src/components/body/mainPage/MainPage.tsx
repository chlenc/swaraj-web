import React from "react";
import Good from "./Good";
import styled from "@emotion/styled";

const Root = styled.div`
margin: -45px;
& > *{
margin: 45px;
}
`
const MainPage: React.FunctionComponent = () => <Root>
    <Good/>
    <Good/>
</Root>

export default MainPage;
