import React from "react";
import styled from "@emotion/styled";
import Menu from "./Menu";

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Returns: React.FC =() => <Root>
    <Menu/>
    Returns
</Root>

export default Returns;