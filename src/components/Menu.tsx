import React from "react";
import styled from "@emotion/styled";
import { inject, observer } from 'mobx-react'
import { HistoryStore } from '../stores'

const Wrapper = styled.div`
`

const Menu: React.FunctionComponent = () => {
    const items: string[] = ['FAQ', 'About', 'Blog', 'Docs']

    return <Wrapper>
        {items.map((item, index) => <Item key={index} href={item} text={item} />)}
    </Wrapper>
}
export default Menu



interface IItemProps {
    href: string
    text: string
    historyStore?: HistoryStore
}

const Item: React.FunctionComponent<IItemProps> = inject('historyStore')(observer(
    (props) => {
        const handlePush = (href: string) => props.historyStore?.history.push(href)
        return <ItemRoot onClick={() => handlePush(props.href)}>
            {props.text}
        </ItemRoot>
    }))

const ItemRoot = styled.div``