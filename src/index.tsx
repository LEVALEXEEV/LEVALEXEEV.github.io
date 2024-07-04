import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import { setCart, setDevice } from './store/actions';
import { getCookie } from './utils'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(setDevice((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false)));

const cart = getCookie('cart');
if (cart) {
  store.dispatch(setCart(JSON.parse(cart)));
}

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
