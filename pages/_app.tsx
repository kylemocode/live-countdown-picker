import { useEffect } from 'react';
import { Provider } from 'react-redux';

import DynamicTheme from '../constants/themes/DynamicTheme';
import Meta from '../modules/meta/Meta';
import store from '../redux/store';
import '../styles/globals.css';

function App({ Component, pageProps }) {
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

export default App;
