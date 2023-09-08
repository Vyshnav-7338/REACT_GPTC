import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext'
import Context from './store/FirebaseContext';
import firebase from './firebase/config';
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(

    <FirebaseContext.Provider value={{ firebase }}>
        <Context>
        <React.StrictMode>
     <BrowserRouter>
      <App />
     </BrowserRouter>
   </React.StrictMode>

        </Context>

    </FirebaseContext.Provider>
    , document.getElementById('root'));


