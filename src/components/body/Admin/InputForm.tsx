/** @jsx jsx */
import React, {useState} from "react";
import styled from "@emotion/styled";
import { useObserver } from 'mobx-react'
import good from '../../../assets/images/good.png'
import Input from "../../Input";
import Button from "../../Button";
import {css, jsx} from "@emotion/core";
import DataStore from "../../../stores/DataStore"
import {useStores} from "../../../hooks/use-stores";
import {storage} from "../../../utils/firebase";

interface IItems {
    adminStore?: DataStore
}
const Root = styled.div`
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
font-family: Roboto Mono, monospace;
font-weight: normal;
font-size: 14px;
line-height: 16px;
`
const Title = styled.div`
margin-bottom: 28px;
`
const AddItem = styled.div`
display: flex;
`
const ItemImg = styled.img`
max-width: 436px;
`
const Info = styled.div`
display: flex;
flex-direction: column;
`
const InputBox = styled.div`
padding: 23px 0;
display: flex;
flex-direction: column;
margin: -16px;
&>*{
margin: 16px;}
`
const ButtonBox = styled.div`
margin: -22px;
&>*{
margin: 22px;
}
`
const Picker = styled.div`
display: flex;
.inputfile {
width: 0.1px;
height: 0.1px;
opacity: 0;
overflow: hidden;
position: absolute;
z-index: -1;
}
.inputfile + label {
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
outline: none;
}
`
const InputForm: React.FC<IItems> = () => {
    const {dataStore: adminStore} = useStores()

    const [title, setTitle] = useState<string>(''),
          [description, setDescription] = useState<string>(''),
          [quantity, setQuantity] = useState<string>(''),

          [vrPreview, setVRPreview] = useState<any>(null),
          [realWorldPreview, setRealWorldPreview] = useState<any>(null),
          [png, setPNG] = useState<any>(null),
          [assetPackage, setAssetPackage] = useState<any>(null),

          [vrPreviewUrl, setVRPreviewUrl] = useState<string>(''),
          [realWorldPreviewUrl, setRealWorldPreviewUrl] = useState<string>(''),
          [pngUrl, setPNGUrl] = useState<string>(''),
          [assetPackageUrl, setAssetPackageUrl] = useState<string>('');

    const handleSubmit = async (e:any) => {
        console.log(vrPreview)
        await  storage.ref(`goods`).put(vrPreview)
            .on("state_changed",
                snapshot => {},
                error => {console.log(error)},
                ()=> storage.ref("goods")
                    .getDownloadURL()
                    .then((url)=> console.log(url)))
       // await adminStore?.addImage(vrPreview)
        // adminStore?.addItem({title, description, quantity, vrPreview, realWorldPreview, png, assetPackage})
    }

    return useObserver(() =><Root onSubmit = {handleSubmit}>
        <Wrapper>
            <Title>Create New Item</Title>
            <AddItem>
                <ItemImg src={good} alt = 'Good'/>
                <Info>
                    <InputBox>
                        <Input placeholder = "Enter title" onChange = {(e)=> setTitle(e.target.value)}/>
                        <Input placeholder = "Enter description" onChange = {(e)=> setDescription(e.target.value)}/>
                        <Input placeholder = "Enter quantity" onChange = {(e)=> setQuantity(e.target.value)}/>
                    </InputBox>
                    <ButtonBox>
                        <Picker>
                            <input type="file" name="file"
                                   id = "3d" className="inputfile"
                                   onChange = {(e:any)=> setVRPreview(e.target.files[0])}/>
                            <label htmlFor="3d">Upload 3d Preview</label>
                            <button onClick = {handleSubmit}>tik</button>
                        </Picker>
                        <Picker>
                            <input type="file" name="file"
                                   id = "preview" className="inputfile"
                                   onChange = {(e)=> setRealWorldPreview(e.target.files)}/>
                            <label htmlFor="preview">Upload Real World Preview</label>
                        </Picker>
                        <Picker>
                            <input type="file" name="file"
                                   id = "png" className="inputfile"
                                   onChange = {(e)=> setPNG(e.target.files)}/>
                            <label htmlFor="png">Upload PNG File</label>
                        </Picker>
                        <Picker>
                            <input type="file" name="file"
                                   id = "asset" className="inputfile"
                                   onChange = {(e)=> setAssetPackage(e.target.files)}/>
                            <label htmlFor="asset">Upload Asset Package</label>
                        </Picker>
                    </ButtonBox>
                </Info>
            </AddItem>
            <Button css = {css`border: 0; background: #CBE5CC; margin: 40px 0 60px 0;`}
                    type="submit" >Publish Item</Button>
        </Wrapper>
    </Root>)
}

export default InputForm;