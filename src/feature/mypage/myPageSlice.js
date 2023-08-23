import { createSlice } from "@reduxjs/toolkit";
const IME = {
    id: "",
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
    companyList: {
        id: "",
        siteName: "",
        location: "",
        pageLink: "",
        pagePicture: ""
    },
    mentor: {
        company: "",
        department: "",
        introduction: "",
        majorCareer: "",
        mentorId: ""
    },
    reviewList: {
        reviewTitle : "",
        reviewContent : "",
        companyRating : "",
        jobResponsibilities : "",
        recommendation : "",
        jobSearchDuration : "",
        previousOccupation : "",
        ageAtEmployment : "",
        jobSearchMethod : "",
        companyId: ""
    }
}
export const myPageSlice = createSlice({
    name: "mypage",
    initialState: { ...IME },
    reducers: {
        setMy: (state, { payload }) => {
            state.id = payload.id;
            state.username = payload.username;
        },
    }
})
export const { test, setMe} = myPageSlice.actions
export default myPageSlice.reducer