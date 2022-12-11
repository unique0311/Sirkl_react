import { configureStore } from '@reduxjs/toolkit'
import supplyReducer from './supplyslice'

export default configureStore({
    reducer: {
        supply: supplyReducer
    }
})