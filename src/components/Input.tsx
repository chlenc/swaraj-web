import React from "react";
import styled from "@emotion/styled";

interface IProps {
    text: string
}
export default class Input extends React.Component<IProps>{

    render(): React.ReactNode {
        return <Root
            placeholder= {this.props.text}/>;
    }
}


const Root = styled.input`
width: 316px;
`
