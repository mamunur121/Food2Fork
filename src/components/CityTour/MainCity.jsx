import React from 'react';
import './index.scss';
import Navbar from "./Navbar/Navbar";
import TourList from "./TourList/TourList";

class MainCity extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Navbar />
                <TourList />
            </React.Fragment>
        );
    }
}

export default MainCity;