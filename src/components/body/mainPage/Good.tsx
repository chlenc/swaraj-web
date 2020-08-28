/** @jsx jsx */
import React, {useState} from "react";
import styled from "@emotion/styled";
import good from "../../../assets/images/good.png"
import {css, jsx} from "@emotion/core";
import Button from "../../Button";
import {ROUTES} from "../../../ROUTES";
import {Link} from "react-router-dom";
import Size from "../Size";


const Root = styled.div`
display: flex;
justify-content: center;
font-size: 12px;
line-height: 16px;
color: #19191D;
text-align: center;
`
const GoodImg = styled.div`
position: relative;
max-width: 664px;
max-height: 784px;
`
const Physical = styled.div``
const Digital = styled.div`
`
const ImgPreview = styled.div`
position: absolute;
left: 218px;
top: 715px;
margin: -16px;
font-weight: normal;
font-size: 10px;
line-height: 13px;
`
const ViewButton = styled.button`
margin: 16px;
cursor: pointer;
border: 0;
background: none;
font-family: Oxygen Mono,monospace;
font-weight: normal;
font-size: 10px;
line-height: 13px;
box-sizing: border-box;
`
const GoodInfo = styled.div`
width: 30%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 70px;
`
const GoodName = styled.div`
font-size: 18px;
line-height: 24px;
`
const Description = styled.div`
margin: 31px 0 47px 0;
`
const Details = styled.div`
background: #ECF7ED;
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 5px;
padding: 23px 25px;
margin-bottom: 40px;
`
const SizeChoose = styled.div`
display: flex;
margin: -6px;
& > *{
margin: 6px;
}
`

const Price = styled.div`
margin-top: 46px;
margin-bottom: 44px;
font-family: Roboto Mono, monospace;
font-weight: normal;
font-size: 14px;
line-height: 16px;
color: #19191D
`
const Good: React.FunctionComponent = () => {
    const [isDigital, setDigital] = useState(true)
    const handleDigitalView = () => setDigital(true)
    const handlePhysicalView = () => setDigital(false)

    return  <Root>
        <GoodImg>
            <Physical css = {css`display: ${isDigital? 'none': 'block'}`}>
                <img src={good} alt="Good"/>
            </Physical>
            <Digital css = {css`display: ${isDigital? 'block': 'none'}`}>
                    <iframe title="A 3D model" width="664" height="784"
                            src="https://sketchfab.com/models/5263eaaaed8041ef8413746306284bb8/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                            frameBorder="0" allow="autoplay; fullscreen; vr"/>
            </Digital>
            <ImgPreview>
                Preview:
                <ViewButton onClick = {handleDigitalView}>Digital</ViewButton>
                <ViewButton onClick = {handlePhysicalView}>Physical</ViewButton>
            </ImgPreview>
        </GoodImg>
        <GoodInfo>
            <GoodName>
                DEMO TSHIRT
            </GoodName>
            <Description>
                Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Description>
            <Details>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </Details>
            <SizeChoose>
                <Size>M</Size>
                <Size css={css` border: 1px solid #4A4B57`}>L</Size>
                <Size css={css`color: #E1E1E3;`}>XL</Size>
                <Size>XXL</Size>
                <Size css={css`text-decoration: underline;`}>Sizing</Size>
            </SizeChoose>
            <Price>Price: 49 USD (0.27 ETH)</Price>
            <Button css={css`background:#CBE5CC; border: 0;`}>
                <Link to={ROUTES.BUY}>Buy</Link></Button>
        </GoodInfo>
    </Root>;
}



export default Good

