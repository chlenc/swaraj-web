import React from "react";
import styled from "@emotion/styled";
import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";
import {ROUTES} from "../../../ROUTES";
import MenuButton from "../../MenuButton";
import About from "../About/About";

const Root = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Menu = styled.div`
margin: 42px 0;
display: flex;
padding: -15px;
&>*{
padding: 15px;
}
`

interface IProps {
}

const history = createBrowserHistory()

export default class CustomerCare extends React.Component<IProps> {

    render() {
        const path = ROUTES.CUSTOMERCARE;
        const howto = `${path}${ROUTES.HOWtoSHOP}`
        const prodInfo = `${path}${ROUTES.PRODUCTINFO}`
        const payment = `${path}${ROUTES.PAYMENT}`
        const delivery = `${path}${ROUTES.DELIVERY}`
        const returns = `${path}${ROUTES.RETURNS}`
        return <Root>
            <Router history={history}>
                <Menu>
                    <MenuButton href={howto} text="How To Shop"/>
                    <MenuButton href={prodInfo} text="Product Information"/>
                    <MenuButton href={payment} text="Payment"/>
                    <MenuButton href={delivery} text="Delivery"/>
                    <MenuButton href={returns} text="Returns"/>
                </Menu>
            <Switch>
                <Route path={howto} component={() => <div>How To Shop</div>}/>
                <Route path={prodInfo} component={() => <div>Product Information</div>}/>
                <Route path={payment} component={() => <div>Payment</div>}/>
                <Route exact path={delivery} component={About}/>
                <Route exact path={returns} component={() => <div>Returns</div>}/>
            </Switch>
        </Router>
            </Root>
    }

}