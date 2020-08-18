import styled from "@emotion/styled";


const Button = styled.button`
display: flex;
flex-direction: row;
cursor: pointer;
border-radius: 4px;
padding: 12px 16px;
border: 1px solid #4A4B57; 
box-sizing: border-box;
background: white;
font-family: Oxygen Mono,monospace;
font-size: 14px;
line-height: 114%;
color: #4A4B57;

&>*{
color: #4A4B57;
text-decoration: none;
}
`


export default Button;
