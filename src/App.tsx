import React from 'react';
import styled from "@emotion/styled";
import { Router, Switch, Route } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { HistoryStore } from './stores'
import './assets/fonts/fonts.css'
import MainPage from './components/body/MainPage'
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
      <Root>
        <Header/>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/FAQ" component={MainPage} />
          <Route exact path="/About" component={MainPage} />
          <Route exact path="/Blog" component={MainPage} />
          <Route exact path="/Docs" component={MainPage} />
          <Route component={MainPage} />
        </Switch>
        <Footer/>
      </Root>
    </Router>
  }

}


const Root = styled.div`

`