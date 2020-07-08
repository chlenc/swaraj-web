import React from 'react';
import styled from "@emotion/styled";
import { Router, Switch, Route } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { HistoryStore } from './stores'
import './fonts/fonts.css'
import MainPage from  './components/body/mainPage'
interface IProps {
  historyStore?: HistoryStore
}

@inject('historyStore')
@observer
export default class App extends React.Component<IProps> {

  render() {
    return <Router history={this.props.historyStore!.history}>
      <Root>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route component={MainPage} />
        </Switch>
      </Root>
    </Router>
  }

}


const Root = styled.div`

`