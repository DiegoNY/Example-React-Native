import * as React from 'react';

/**REDUX */
import store from './libs/redux/store'
import { Provider } from 'react-redux'
import { Screens } from './screens';
import { Login } from './components/login/Login';


export default function App() {
  const [isLogin, setLogin] = React.useState(true)

  return (
    <Provider store={store}>
      {isLogin ? <Screens /> : <Login />}
    </Provider>
  );
}