/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";
import {css,jsx} from "@emotion/core";


interface IItemProps {
    href?: string
    text: string
    styles?:string
}

const ItemRoot = styled.div`
display: flex;
flex-direction: row;
border-radius: 4px;
padding: 12px 16px;
cursor: pointer;
&>*{
text-decoration: none;
color: #4A4B57;
}
`
const Wrapper = styled.div`
border: 1px solid #4A4B57; 
box-sizing: border-box;
border-radius: 4px;
`

const MenuButton: React.FunctionComponent<IItemProps> = ({href, text}) =>
  <ItemRoot> <Link  to={href}>{text}</Link></ItemRoot>

export default MenuButton;

const Button: React.FunctionComponent<IItemProps> = ({text,styles}) =>
   <Wrapper css={css`${styles}`}><ItemRoot> {text}</ItemRoot></Wrapper>

export {
    Button
}