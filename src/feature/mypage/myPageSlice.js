import { createSlice } from "@reduxjs/toolkit";
const IME = {

    myPageData:[],
    id: "",
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
    reviewBoolean:false,
    mentorsBoolean:false,
    companyBoolean:false,
    companyList:[],
    mentors:[],
    reviewList:[]
    // companyList: {
    //     id: "",
    //     siteName: "",
    //     location: "",
    //     pageLink: "",
    //     pagePicture: ""
    // },
    // mentor: {
    //     company: "",
    //     department: "",
    //     introduction: "",
    //     majorCareer: "",
    //     mentorId: ""
    // },
    // reviewList: {
    //     reviewTitle : "",
    //     reviewContent : "",
    //     companyRating : "",
    //     jobResponsibilities : "",
    //     recommendation : "",
    //     jobSearchDuration : "",
    //     previousOccupation : "",
    //     ageAtEmployment : "",
    //     jobSearchMethod : "",
    //     companyId: ""
    // }

}
export const myPageSlice = createSlice({
    name: "mypage",
    initialState: { ...IME },
    reducers: {
        setMy: (state, { payload }) => {
            state.id = payload.id;
            state.username = payload.username;
        },
        setCompanyBoolean: (state)=>{
            state.companyBoolean=!state.companyBoolean;
        },
        setReviewBoolean: (state)=>{
            state.reviewBoolean=!state.reviewBoolean;
        },
        setMentoBoolean: (state)=>{
            state.mentorsBoolean=!state.mentorsBoolean;
        },
        setMyPageData:(state,{payload})=>{
            state.myPageData=payload;
        },
        setMyMentors: (state, { payload }) => {
            state.mentors = payload.mentors;
        },

    }
})
export const {setMyMentors,setMyPageData,setMy, setCompanyBoolean,setMentoBoolean,setReviewBoolean} = myPageSlice.actions
export default myPageSlice.reducer