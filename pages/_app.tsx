import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Workbox } from 'workbox-window';
import { register, unregister } from 'next-offline/runtime';

import DynamicTheme from '../constants/themes/DynamicTheme';
import Meta from '../modules/meta/Meta';
import store from '../redux/store';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  useEffect(()=> {
    register('/service-worker.js', { scope: '/' }) 
    return () => {
      unregister();  
    };
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
