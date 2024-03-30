import { configureStore } from '@reduxjs/toolkit'

//объединение редьюсеров
import { combineReducers } from 'redux'

//одиночные редьюсеры
//import toastSystemReducer from './reducer/toastSystem'
import myUserReducer from './reducer/myUser'

const reducer = combineReducers({
    //toastSystem: toastSystemReducer,
    myUser: myUserReducer
})

let app = configureStore({
    reducer: reducer
})

export const makeStore = () => {
    return app
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
