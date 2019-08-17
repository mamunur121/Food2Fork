import React from 'react';
import UsersList from "./UsersList";

class PopularMovies extends React.Component {
    render() {
        const { profiles, users, movies } = this.props;
        // use an array, change the data shape change,
        const moviesArr = Object.values(movies);
        console.log(moviesArr);
        return (
            <React.Fragment>
                <h4>How Popular is Your Favorite Movie?</h4>
                {moviesArr.map(movie => (
                    <div key={movie.id}>
                        <h5>{movie.name}</h5>
                        <UsersList movieID={movie.id} users={users} profiles={profiles}/>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}
export default PopularMovies;