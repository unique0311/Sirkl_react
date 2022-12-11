import { createSlice } from '@reduxjs/toolkit'

export const supplySlice = createSlice({
    name: 'supply',
    initialState: {
        value: 0
    },
    reducers: {
        setMode: (state, action) => {
            state.value = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { setMode } = supplySlice.actions

export default supplySlice.reducer