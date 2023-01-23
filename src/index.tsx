import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/Store';
import { Provider, useDispatch } from 'react-redux'
import { setOrders } from './store/OrdersSlicer';
import { getOrders, getUserInfo } from './api/middleware';
import { setUserInfo } from './store/UserSlicer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const Data = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      setData();
  }, [dispatch]);

  const setData = async () => {
    const orders = await getOrders();
    const userInfo = await getUserInfo();
    dispatch(setOrders(orders));
    if(userInfo === "ERROR"){
      dispatch(setUserInfo(undefined));
    } else {
      dispatch(setUserInfo(userInfo));
    }
  }

  return <></>
};
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <Data />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
