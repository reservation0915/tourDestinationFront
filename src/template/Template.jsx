import React from 'react';
import { Outlet } from 'react-router';
import MyHeader from '../components/MyHeader';

const Template = () => {
    return (
        <div>
            <MyHeader/>
            <Outlet></Outlet>
        </div>
    );
};

export default Template;