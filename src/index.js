import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import PostStore from "./store/PostStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        post: new PostStore()
    }}>
    <App />
    </Context.Provider>,
  document.getElementById('root')

);

document.documentElement.style.overflow = 'overlay'
