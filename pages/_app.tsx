import { Provider } from 'react-redux';

import Meta from '../modules/meta/Meta';
import store from '../redux/store';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Meta />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
