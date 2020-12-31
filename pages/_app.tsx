import { Provider } from 'react-redux';

import DynamicTheme from '../constants/themes/DynamicTheme';
import Meta from '../modules/meta/Meta';
import store from '../redux/store';
import '../styles/globals.css'

function App({ Component, pageProps }) {
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
