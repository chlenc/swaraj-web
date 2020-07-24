import React from "react";
import styled from "@emotion/styled";
import Button from "../../Button";
import {ROUTES} from "../../../ROUTES";
import {Link} from "react-router-dom";

const Root = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
line-height: 16px;
margin-top: 32px;
`
const Email = styled.div`
margin-right: 42px;
text-decoration: underline;
`

const LogedIn: React.FC =() => <Root>
    Address:&nbsp;
    <Email> 0xf5Fd102308a9dab0f03C99B0AB944B9b52415d40</Email>
    <Button>
        <Link to={ROUTES.ROOT}>Sign Out</Link>
    </Button>
</Root>

export default LogedIn;