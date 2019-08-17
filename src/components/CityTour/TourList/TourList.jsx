import React from 'react';
import Tour from "../Tour/Tour";
import './tourlist.scss';
import {tourData} from '../tourData';

class TourList extends React.Component{
    state = {
        tours: tourData,
    };

    removeTour = id => {
        const filteredItems= this.state.tours.filter(tour => tour.id !== id);
        this.setState({
            tours: filteredItems
        })
    };


    render() {
        const {tours}  = this.state;
        console.log(tours);
        return(
            <section className='tourlist'>
                {
                    tours.map(tour=>(
                            <Tour tour={tour}
                                  key={tour.id}
                                  removeTour={this.removeTour}
                            />
                        ))
                }
            </section>
        );
    }
}

export default TourList;