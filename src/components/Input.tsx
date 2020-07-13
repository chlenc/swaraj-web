import React from "react";
import styled from "@emotion/styled";

interface IProps {
    text: string
}


const Input = styled.input`
padding-bottom: 5px;
font-size: 12px; 
border: none;
border-bottom: 1px solid rgba(0, 0, 0, 0.36);
outline: none;
color: #4A4B57;
transition: all .15s ease;

::placeholder{
    font-family: Roboto Mono, monospace;

}
&:hover{
}
&:focus{
border-bottom: 1px solid green;
}    
`

export default Input
