import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import {inject, observer} from 'mobx-react'
import {HistoryStore} from './stores'
import MainPage from './components/body/mainPage/MainPage'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

interface IProps {
    historyStore?: HistoryStore
}

@inject('historyStore')
@observer
export default class App extends React.Component<IProps> {

    render() {
        return <Router history={this.props.historyStore!.history}>
            <Header/>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/faq" component={MainPage}/>
                <Route exact path="/about" component={MainPage}/>
                <Route exact path="/blog" component={MainPage}/>
                <Route exact path="/docs" component={MainPage}/>
                <Route component={MainPage}/>
            </Switch>
            <Footer/>
        </Router>
    }

}
