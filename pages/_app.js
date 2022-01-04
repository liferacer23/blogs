import "../styles/globals.css";
import Layout from "../components/Layout";
import App from "next/app";
import React from "react";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import { Provider } from "react-redux";

class MyApp extends App{
  render(){
    const {Component,pageProps}=this.props
    return (
      <Layout>
      <Provider store={store}>
       
      <Component {...pageProps} />
   
      </Provider>
      </Layout>
    )
  }
}

const makestore =()=>store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);











/* function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp; */
