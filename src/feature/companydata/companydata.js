import { createSlice } from "@reduxjs/toolkit";

const IME = {
    id: "",
    location: "",
    grade:"",
    siteName:"",
    gradeData: false
}

export const companyDataSlice = createSlice({
    name: "companyData",
    initialState: { ...IME },
    reducers: {
        setLocation: (state, { payload }) => {
            state.location = payload.location;
        },
        setGradeData: (state) => {
            state.gradeData=!state.gradeData;
        },
        setGrade:(state, {payload})=>{
            state.grade=payload.grade;
        }
    }
})
export const { setLocation,setGradeData,setGrade} = companyDataSlice.actions

export default companyDataSlice.reducer