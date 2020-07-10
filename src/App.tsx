import React from 'react';
import {Router, Switch, Route, Link} from 'react-router-dom'
import {inject, observer} from 'mobx-react'
import MainPage from './components/body/mainPage/MainPage'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/body/About/About";
import FAQ from "./components/body/FAQ/FAQ";
import {createBrowserHistory} from "history";
import MenuButton from "./components/MenuButton";
import {jsx} from "@emotion/core";

interface IProps {
}

const history = createBrowserHistory()

export enum ROUTES {
    ROOT = '/',
    FAQ = '/faq',
    ABOUT = '/about',
    BLOG = '/blog',
    DOCS = '/docs'
}

export default class App extends React.Component<IProps> {

    render() {
        return <Router history={history}>
            <Header/>
            <Switch>
                <Route exact path={ROUTES.ROOT} component={MainPage}/>
                <Route path={ROUTES.FAQ} component={FAQ}/>
                <Route path={ROUTES.ABOUT} component={About}/>
                <Route exact path={ROUTES.BLOG} component={() => <div>blog</div>}/>
                <Route exact path={ROUTES.DOCS} component={() => <div>docs</div>}/>
                {/*<Route component={MainPage}/>*/}
            </Switch>
            <Footer/>
        </Router>
    }

}
