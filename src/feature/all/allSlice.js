import { createSlice } from "@reduxjs/toolkit";

const INIT_ALL = {
    all: [],
    totalPages: 0,
    page: 0,
    size: 5
}
export const allSlice = createSlice({
    name: "all",
    initialState: { ...INIT_ALL },
    reducers: {
        setAll: (state, { payload }) => {
            state.all = payload.content
            state.totalPages = payload.totalPages
        },
        changeSize: (state, { payload }) => {
            state.size = payload
            state.page = 0
        },
        changePage: (state, { payload }) => {
            state.page = payload
        }
    }
})

export const { setAll, changeSize, changePage } = allSlice.actions

export default allSlice.reducer