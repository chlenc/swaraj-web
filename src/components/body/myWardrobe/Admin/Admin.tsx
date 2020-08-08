/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import LogedIn from "../LogedIn";
import MenuWardrobe from "../MenuWardrobe";
import {css, jsx} from "@emotion/core";
import InputForm from "./InputForm";

const Root = styled.div`
`

const Admin: React.FC =() => {

   return <Root>
        <LogedIn/>
        <MenuWardrobe/>
        <InputForm/>
    </Root>
}

export default Admin;