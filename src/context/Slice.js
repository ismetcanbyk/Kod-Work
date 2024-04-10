import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const Slice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.push(action.payload)
        },
        removeFavorite: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
    },
})
export default Slice

export const { addFavorite, removeFavorite, } = Slice.actions