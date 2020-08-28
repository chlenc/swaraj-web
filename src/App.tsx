import React from 'react';
import {Route, Router, Switch} from 'react-router-dom'
import Footer from "./components/footer/Footer";
import Admin from "./components/body/Admin/Admin";
import Login from "./components/body/Login";
import PrivateRoute from "./components/PrivateRoute";
import {useStores} from "./hooks/use-stores";

const App: React.FC = () => {
    const {routerStore: {history}} = useStores();
    return <Router history={history}>
        <Switch>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/"><Admin/></PrivateRoute>
        </Switch>
        <Footer/>
    </Router>
}

export default App;
