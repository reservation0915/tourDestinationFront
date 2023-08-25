import { createSlice } from "@reduxjs/toolkit";

const IME = {
    id: "",
    location: "",
    grade:"",
    siteName:"",
    gradeData: false,
    regionData: false,
    region:""
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

            state.grade=payload;

        },
        setRegionData:(state)=>{
            state.regionData=!state.regionData;
        },
        setRegion:(state,{payload})=>{
          state.region=payload;
        }
    }
})
export const { setLocation,setGradeData,setGrade,setRegionData,setRegion} = companyDataSlice.actions

export default companyDataSlice.reducer