import React from "react";
import styled from "@emotion/styled";
import Menu from "./Menu";

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const ProductInfo: React.FC =() => <Root>
    <Menu/>
    Product Info
</Root>

export default ProductInfo;