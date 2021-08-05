import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import reducers from './reducers'
import sagas from './sagas'

const persistConfig = {
        key: 'root',
        storage,
        whitelist: [],
    },
    sagaMiddleware = createSagaMiddleware(),
    persistedReducer = persistReducer(persistConfig, reducers),
    store = createStore(persistedReducer, applyMiddleware(...[logger, sagaMiddleware])),
    persistor = persistStore(store)

export { store, persistor }

sagaMiddleware.run(sagas)
