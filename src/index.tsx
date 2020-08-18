import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import './assets/fonts/fonts.css'
import 'rc-dialog/dist/rc-dialog.css'
import {mobXStore} from "./contexts";

ReactDOM.render(<Provider {...mobXStore}>
    <App />
</Provider>, document.getElementById('root'));
