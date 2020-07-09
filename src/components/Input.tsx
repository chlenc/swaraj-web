import React from "react";
import styled from "@emotion/styled";

interface IProps {
    text: string
}

const Root = styled.label`
width: 100%;
max-width: 316px;
border-radius: 3px;
overflow: hidden;
`
const Wrapper = styled.input`
width: 328px;
border: 0;
padding-bottom: 5px;
font-size: 12px; 
box-shadow: inset 0 -1px 0 #F7F7FA;
color: #F7F7FA;
transition: all .15s ease;

&:hover{
      box-shadow: inset 0 -2px 0 #CBE5CC;}
&:focus{
      outline: none;
      box-shadow: inset 0 -2px #43A047}    
`
export default class Input extends React.Component<IProps> {

    render(): React.ReactNode {
        return <Root>
                    <Wrapper placeholder={this.props.text}/>
        </Root>;
    }
}

