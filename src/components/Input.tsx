import React from "react";
import styled from "@emotion/styled";


const Input = styled.input`
width: 22vw;
padding-bottom: 5px;
font-size: 12px; 
border: none;
border-bottom: 1px solid rgba(0, 0, 0, 0.36);
outline: none;
color: #4A4B57;
transition: all .15s ease;

::placeholder{
font-family: Oxygen Mono, monospace;
}
&:hover{
border-bottom: 1px solid #CBE5CC;
}
&:focus{
border-bottom: 1px solid #43A047;
}    
`

export default Input
