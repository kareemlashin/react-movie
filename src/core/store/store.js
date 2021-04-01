import {
    createStore,
    applyMiddleware,
    compose,
     combineReducers
} from 'redux';

import thunk from 'redux-thunk';
import {
    initialState
} from './../state/state.js'

const reducers = (state = initialState, action) => {
      if (action.type == 'spinner') {

        return {
            ...state,
            spinner:action.spinner
        }

    }
    
    else if (action.type == 'spinners') {

        return {
            ...state,
            spinners:action.spinners

        }

    }

    else if (action.type == 'scrolling') {

        return {
            ...state,
            scrolling:[...state.scrolling,...action.scrolling]
        }

    }
    else if (action.type == 'reset') {

        return {
            ...state,
            loadMore:[],
            pagination:[],
            scrolling:[]

        }

    }
    
    else if (action.type == 'loadMore') {

        return {
            ...state,
            loadMore:[...state.loadMore,...action.loadMore]
        }

    }
    
    else if (action.type == 'pagination') {

        return {
            ...state,
            pagination:[...action.pagination]

        }

    }
    else if (action.type == 'shared') {

        return {
            ...state,
            shared:action.shared
        }

    }

    else if (action.type == 'dir') {

        return {
            ...state,
            dir:action.dir
        }

    }

    
    else if (action.type == 'trend') {

        return {
            ...state,
            trend:action.trend
        }

    }
    else if (action.type == 'slider') {

        return {
            ...state,
            slider:action.slider
        }

    }
    


    else if (action.type == 'mode') {

        return {
            ...state,
            mode:action.mode
        }

    }
    
    else if (action.type == 'loadingPage') {

        return {
            ...state,
            loadingPage:action.loadingPage
        }

    }
    
    else if (action.type == 'nav') {

        return {
            ...state,
            nav:action.nav
        }

    }
    else if (action.type == 'message') {

        return {
            ...state,
            message:action.message
        }

    }
    else if (action.type == 'world') {

        return {
            ...state,
            world:action.world
        }

    } 
    
    else {
        return state
    }

}


const root=combineReducers({
    reducers:reducers,
});
export default createStore(root, compose(applyMiddleware(thunk)))