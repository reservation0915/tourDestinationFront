import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import meReducer from '../feature/me/meSlice'
import allReducer from '../feature/all/allSlice'
import companyReducer from '../feature/company/company'
import mypageReducer from '../feature/mypage/myPageSlice'
import companyDataReducer from '../feature/companydata/companydata'

const store = configureStore({
  reducer: {
    login: loginReducer,
    me: meReducer,
    all: allReducer,
    company : companyReducer,
    mypage : mypageReducer,
    companyData : companyDataReducer
  },
});

export default store;