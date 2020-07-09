import React from "react";
import styled from "@emotion/styled";

interface IProps {
    text: string
}

const Root = styled.input`
width: 316px;
`

export default class Input extends React.Component<IProps> {

    render(): React.ReactNode {
        return <Root placeholder={this.props.text}/>;
    }
}

