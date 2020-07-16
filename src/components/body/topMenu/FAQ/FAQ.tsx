import React from "react";
import styled from "@emotion/styled";

const Root = styled.div`
margin: 54px 0;
display: flex;
justify-content: center;
text-align: center;
&>* {
width: 30%;
margin: -41px;
}
`
const ColumnOne = styled.div`
`
const ColumnTwo = styled.div`
`
const Item = styled.div`
margin: 41px;
display: flex;
flex-direction: column;
align-items: center;
`
const Title = styled.div`
margin-bottom: 20px;
font-family: Roboto Mono,monospace;
font-weight: normal;
font-size: 14px;
line-height: 16px;
color: #000000;
`
const Text = styled.div`
width: 78%;
font-size: 12px;
line-height: 16px;
color: #19191D;
`
const FAQ:React.FC = () =><Root>
        <ColumnOne>
            <Item>
                <Title>Is there are really long questions?</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum auctor vel erat quis mattis. Donec aliquam est eget odio sollicitudin scelerisque.
                    Phasellus nisi ipsum, porttitor vel odio nec, pulvinar convallis dolor.
                    Vestibulum vel ante tortor. In dignissim a neque non sagittis.
                    Suspendisse feugiat accumsan sapien, a tincidunt sapien finibus ac.
                    Curabitur venenatis faucibus elit, non ultrices elit tincidunt vel.
                    Nunc feugiat condimentum tincidunt.
                    Donec vel porta mi. Nam ornare nunc id risus fermentum euismod.
                </Text>
            </Item>
            <Item>
                <Title>Is there are really long questions?</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum auctor vel erat quis mattis. Donec aliquam est eget odio sollicitudin scelerisque.
                    Phasellus nisi ipsum, porttitor vel odio nec, pulvinar convallis dolor.
                    Vestibulum vel ante tortor. In dignissim a neque non sagittis.
                    Suspendisse feugiat accumsan sapien, a tincidunt sapien finibus ac.
                    Curabitur venenatis faucibus elit, non ultrices elit tincidunt vel.
                    Nunc feugiat condimentum tincidunt.
                    Donec vel porta mi. Nam ornare nunc id risus fermentum euismod.
                </Text>
            </Item>
        </ColumnOne>
        <ColumnTwo>
            <Item>
                <Title>Is there are really long questions?</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum auctor vel erat quis mattis. Donec aliquam est eget odio sollicitudin scelerisque.
                    Nunc feugiat condimentum tincidunt.
                    Donec vel porta mi. Nam ornare nunc id risus fermentum euismod.
                </Text>
            </Item>
            <Item>
                <Title>Is there are really long questions?</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum auctor vel erat quis mattis. Donec aliquam est eget odio sollicitudin scelerisque.
                    Phasellus nisi ipsum, porttitor vel odio nec, pulvinar convallis dolor.
                    Vestibulum vel ante tortor. In dignissim a neque non sagittis.
                    Suspendisse feugiat accumsan sapien, a tincidunt sapien finibus ac.
                </Text>
            </Item>
        </ColumnTwo>
</Root>

export default FAQ