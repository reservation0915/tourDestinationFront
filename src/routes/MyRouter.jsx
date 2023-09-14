import React from 'react';
import { Route, Routes } from 'react-router';
import Template from '../template/Template';
import "../App.css";
import TourDestination from "../components/TourDestination";
import TourDestinationDetail from "../components/TourDestinationDetail";
import TourDestinationReservation from "../components/TourDestinationReservation";




const MyRouter = () => {

    return <Routes>
        <Route element={<Template />}>
            <Route path='/tourdestination' element={<TourDestination />}></Route>
            <Route path='/tourdestinationdetail' element={<TourDestinationDetail />}></Route>
            <Route path='/tourdestinationreservation' element={<TourDestinationReservation />}></Route>

        </Route>
    </Routes>

};

export default MyRouter;