import React from 'react';                              // Permite crear componentes de React
import ReactDOM from 'react-dom';                       // Permite renderidar los componentes de React en el navegador
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';        // Permite informar sobre el rendimiento de la aplicación
import { BrowserRouter } from 'react-router-dom';       // Permite habilitar el enrutamiento de la aplicación
import {Provider} from 'react-redux';                   // Se utiliza para proporcionar un almacenamiento de datos compartidos ("store") para todos los componentes de la aplicación
import store from './Redux/store'                       // Importa el store que será compartido por la aplicación

ReactDOM.render(

  <Provider store={store}>                              {/* Permite que los componentes de la aplicación accedan al store compartido */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
