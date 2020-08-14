import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import {createBrowserHistory} from "history";
import Footer from "./components/footer/Footer";
import Admin from "./components/body/Admin/Admin";

const history = createBrowserHistory()


const App: React.FC = () => {
    return <Router history={history}>
            <Admin/>
            <Footer/>
        </Router>}
export default App;
