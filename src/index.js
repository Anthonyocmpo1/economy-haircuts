import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Economyhaircuts</title>
    <meta name="description" content="Your one-stop destination for personalized unisex services catering to clients of all ages. Whether you're looking for stylish hair color, precision haircuts, or waxing and grooming services, we are dedicated to helping you look and feel your best.

." />
    <meta name="keywords" content="economy haircuts, affordable haircuts, unisex salon, hair styling, precision haircuts, hair color, waxing services, grooming services, best hair salon, Pearland hair salon" />
    <link rel="canonical" href="https://economyhair.com/" />
</Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
