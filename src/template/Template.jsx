import React from 'react';
import MyHeader from './MyHeader';
import { Outlet } from 'react-router';

const Template = ({isLogin}) => {
    return (
        <div>
            <MyHeader isLogin={isLogin}></MyHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Template;