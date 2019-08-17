import React from 'react';

import {profiles, users, movies} from './data';
import FavMovies from "./FavMovies";
import PopularMovies from './PopularMovies';

class FavMovie extends React.Component {
    render() {
        return (
            <div>
                <FavMovies profiles={profiles} users={users} movies={movies}/>
                <PopularMovies profiles={profiles} users={users} movies={movies}/>
            </div>
        );
    }
}
export default FavMovie;