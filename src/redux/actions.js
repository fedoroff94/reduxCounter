import {CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT} from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() { //AC
    return {
        type: DECREMENT
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME, payload: newTheme
    }
}

function disableBtn(){
    return {
        type: DISABLE_BUTTONS
    }
}

function enableBtn(){
    return {
        type: ENABLE_BUTTONS
    }
}

export function asyncIncrement() { //thunk
    return function(dispatch) {
        dispatch(disableBtn());
        setTimeout(() => {
            dispatch(increment());
            dispatch(enableBtn());
        }, 3000);
    }
}