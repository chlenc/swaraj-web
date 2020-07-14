import React from "react";
import styled from "@emotion/styled";
import Menu from "./Menu";
import About from "../About/About";

const Root = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const Delivery: React.FC =() => <Root>
    <Menu/>
    <About/>
</Root>

export default Delivery;