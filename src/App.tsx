import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import MainPage from './components/body/mainPage/MainPage'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/body/About/About";
import FAQ from "./components/body/FAQ/FAQ";
import {createBrowserHistory} from "history";
import {ROUTES} from './ROUTES'
import CustomerCare from "./components/body/customerCare/CustomerCare";

interface IProps {
}

const history = createBrowserHistory()


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
                <Route exact path={ROUTES.PRIVACYPOLICY} component={() => <div>PRIVACYPOLICY</div>}/>
                <Route exact path={ROUTES.TERMSofSERVICE} component={() => <div>TERMSofSERVICE</div>}/>
                <Route exact path={ROUTES.AUTHENTICATEanITEM} component={() => <div>AUTHENTICATEanITEM</div>}/>
                <Route exact path={ROUTES.CUSTOMERCARE} component={CustomerCare}/>
                {/*<Route component={MainPage}/>*/}
            </Switch>
            <Footer/>
        </Router>
    }

}
