import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";


interface IItemProps {
    href: string
    text: string
}

const ItemRoot = styled.div`
display: flex;
flex-direction: row;
border-radius: 4px;
padding: 12px 16px;
cursor: pointer;

line-height: 114%;
letter-spacing: 0.054em;
text-transform: capitalize;
color: #4A4B57;
`

const MenuButton: React.FunctionComponent<IItemProps> = ({href, text}) =>
    <Link  to={href}>{text}</Link>

// const MenuButton: React.FunctionComponent<IItemProps> = inject('historyStore')(observer(
//     (props) => {
//         const handlePush = (href: string) => props.historyStore?.history.push(href)
//         return <ItemRoot onClick={() => handlePush(props.href)}>
//             {props.text}
//         </ItemRoot>
//     }))

export default MenuButton;

