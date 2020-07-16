import React from "react";
import styled from "@emotion/styled";
import Menu from "./Menu";

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const HowToShop: React.FC =() => <Root>
    <Menu/>
    <div>How To Shop</div>
</Root>

export default HowToShop;