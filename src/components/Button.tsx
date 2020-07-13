import React from "react";
import styled from "@emotion/styled";
import {css} from "@emotion/core";

const ItemRoot = styled.div`
display: flex;
flex-direction: row;
cursor: pointer;
border-radius: 4px;
padding: 12px 16px;
border: 1px solid #4A4B57; 
box-sizing: border-box;
&>*{
color: #4A4B57;
}
`


interface IButtonProps {
    text: string
    styles?: string
}


const Button: React.FunctionComponent<IButtonProps> = ({text, styles}) =>
    <ItemRoot css={css`${styles}`}> {text}</ItemRoot>

export default Button;