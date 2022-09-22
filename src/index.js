import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

// import {addNewMessage} from './redux/state';
// import {updateNewMessage} from './redux/state';
// import { subscriber } from './redux/state';

 
const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = () => {
root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <App  store={state} dispatch = {store.dispatch.bind(store)} /> */}
      <App />
    </React.StrictMode>
  </Provider>
);
}

renderEntireTree();

store.subscribe( () => {
  renderEntireTree();
})

// renderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   renderEntireTree(state);
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
