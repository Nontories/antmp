import './App.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import Router from './routers/Router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
