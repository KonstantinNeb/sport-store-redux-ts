import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Main from "./component/main";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
