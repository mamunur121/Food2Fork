import React from 'react';

class FavMovies extends React.Component {
    render() {
        const {profiles, users, movies} = this.props;
        return (
            <React.Fragment>
                <h1>Hello, FavMovie</h1>
                <ol>
                    {profiles.map(profile => (
                        <li key={profile.id}>
                            {users[profile.userID].name}'s favourite movie is {' '}
                            {movies[profile.favoriteMovieID].name}
                        </li>
                    ))
                    }
                </ol>

            </React.Fragment>
        );
    }
}
export default FavMovies;