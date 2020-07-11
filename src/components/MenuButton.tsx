/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import {Link, Route} from "react-router-dom";
import {css, jsx} from "@emotion/core";


interface IItemProps {
    href: string
    text: string
    styles?: string
}

const ItemRoot = styled.div`
display: flex;
flex-direction: row;
cursor: pointer;
&>*{
border-radius: 4px;
padding: 12px 16px;
text-decoration: none;
color: #4A4B57;
}
`

const MenuButton: React.FunctionComponent<IItemProps> = ({href, text}) =>
    <Route path={href}>
        {({match}) => <ItemRoot><Link to={href} css={css`background: ${(match != null) ?  '#EDEDF0': 'none'}`} >{text}</Link></ItemRoot>}
    </Route>

export default MenuButton;


