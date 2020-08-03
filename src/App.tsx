import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import {createBrowserHistory} from "history";
import {ROUTES} from './ROUTES'
import MainPage from './components/body/mainPage/MainPage'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Admin from "./components/body/myWardrobe/Admin/Admin";

const history = createBrowserHistory()

const App: React.FC = () => <Router history={history}>
            <Header/>
            <Switch>
                <Route path={ROUTES.ADMIN} component={Admin}/>
            </Switch>

            <Footer/>
        </Router>
export default App;
