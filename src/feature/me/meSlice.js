import { createSlice } from "@reduxjs/toolkit";

const IME = {
    id: "",
    username: ""
}

export const meSlice = createSlice({
    name: "me",
    initialState: { ...IME },
    reducers: {
        setMe: (state, { payload }) => {
            state.id = payload.id;
            state.username = payload.username;
        },
    }
})
export const { test, setMe} = meSlice.actions

export default meSlice.reducer