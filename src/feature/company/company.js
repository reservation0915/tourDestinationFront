import { createSlice } from "@reduxjs/toolkit";

const IME = {
    id: "",
    grade: "",
    pageLink: "",
    username: "",
    pagePicture: ""
}

export const companySlice = createSlice({
    name: "company",
    initialState: { ...IME },
    reducers: {
        setCompany: (state, { payload }) => {
            state.grade = payload.grade;
            state.id = payload.id;
            state.pageLink = payload.pageLink;
            state.siteName = payload.siteName;
            state.pagePicture=payload.pagePicture;
        },
    }
})
export const { setCompany} = companySlice.actions

export default companySlice.reducer