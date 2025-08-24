import createSagaMiddleware from '@redux-saga/core';
import {configureStore} from '@reduxjs/toolkit'
import { rootsaga } from '../saga/rootsaga';
import pageslice from '../slice/pageslice';




const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer : {
        page : pageslice
      },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootsaga);
export default store; 