import './styles.css'
import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from "./redux/rootReducer";
import {asyncIncrement, changeTheme, decrement, increment} from "./redux/actions";
import thunk from "redux-thunk";
import logger from 'redux-logger';

let store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk, logger)
));

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const theme = document.getElementById('theme');


// function logger(state) {
//     return function (next) {
//         return function (action) {
//             console.log('Prev state :', state.getState())
//             console.log('Action :', action)
//             const newState =  next(action)
//             console.log('New state :', newState)
//             return newState
//         }
//     }
// }

addBtn.addEventListener('click', () => {
    store.dispatch(increment());
});

subBtn.addEventListener('click', () => {
    store.dispatch(decrement());
});

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement());
});

theme.addEventListener('click', () => {
    let newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
    store.dispatch(changeTheme(newTheme));
});

store.subscribe(() => {
    let state = store.getState();
    counter.textContent = state.counter;
    document.body.classList = state.theme.value;
    [subBtn, addBtn, theme, asyncBtn].forEach(btn => btn.disabled = state.theme.disabled);
});

store.dispatch({type: 'INITIAL-STATE'});