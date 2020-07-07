import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RootStore } from './stores';
import { Provider } from 'mobx-react';

const mobXStore = new RootStore();

ReactDOM.render(<Provider {...mobXStore}>
    <App />
</Provider>, document.getElementById('root'));
