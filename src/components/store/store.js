import { createStore } from 'redux';

import rootReducer from '../Reducers'; 

const store = createStore(rootReducer);

export default store;




// import {createStore, combineReducers} from 'redux';
// import cartReducer from '../Reducers/cartReducer';

// const rootReducer = combineReducers({
//     cart: cartReducer
// });

// const store = createStore(rootReducer);

// export default store;