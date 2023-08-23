import { configureStore } from '@reduxjs/toolkit'
import meReducer from '../feature/me/meSlice'
import allReducer from '../feature/all/allSlice'
import companyReducer from '../feature/company/company'
import mypageReducer from '../feature/mypage/myPageSlice'
import companyDataReducer from '../feature/companydata/companydata'

export default configureStore({
    reducer: {
        me: meReducer,
        all: allReducer,
        company : companyReducer,
        mypage : mypageReducer,
        companyData : companyDataReducer

    }
})