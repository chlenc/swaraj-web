import React, {useState} from "react";
import Input from "../Input";
import styled from "@emotion/styled";
import SizedBox from "../SizedBox";
import Button from "../Button";
import {useObserver} from "mobx-react";
import {useStores} from "../../hooks/use-stores";

const Root = styled.div`
display: flex;
flex-direction: column;
height: 500px;
align-items: center;
justify-content: center;
`

const Login: React.FunctionComponent = () => {

    const {accountStore} = useStores()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    return useObserver(() => <Root>
        <Input placeholder="Login" onChange={(e) => setLogin(e.target.value)} value={login}/>
        <SizedBox height={20}/>
        <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
        <SizedBox height={20}/>
        <span style={{width: "22vw"}}>
            remember me
            <input type="checkbox" onChange={e => setRememberMe(e.target.checked)} checked={rememberMe}/>
        </span>
        <SizedBox height={20}/>
        <Button onClick={() => accountStore.signIn(login, password, rememberMe)}>Login</Button>
    </Root>)
}

export default Login
