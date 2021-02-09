import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';

import DynamicTheme from '../constants/themes/DynamicTheme';
import Meta from '../modules/meta/Meta';
import store from '../redux/store';
import '../styles/globals.css';

export interface IPageContext extends NextPageContext {
  isServer: boolean;
  store: any;
}

const AppComponent: NextComponentType<
  AppContext,
  AppInitialProps,
  AppProps
> = ({ Component, pageProps }) => {
  useEffect(()=> {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
}, [])

  return (
    <DynamicTheme>
      <Provider store={store}>
        <Meta />
        <Component {...pageProps} />
      </Provider>
    </DynamicTheme>
  )
}

AppComponent.getInitialProps = async (appContext) => {
  const { Component, ctx } = appContext as AppContext & { ctx: IPageContext };
  const { req, res } = ctx;
  let pageProps = {};

  const isServer = typeof window === 'undefined';
  // const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

  ctx.isServer = isServer;
  ctx.store = store;


  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
  }
}

export default AppComponent;
