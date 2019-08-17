import React from 'react';

class UsersList extends React.Component {
    render() {
        const { movieID, profiles, users } = this.props;

        const filteredProfile = profiles.filter(profile => (
            Number(profile.favoriteMovieID) === movieID
        ));
        console.log(filteredProfile);
        console.log(movieID);

        if(!filteredProfile || filteredProfile.length === 0) {
            return <p>None of the current users liked this movie</p>;
        }
        return (
            <React.Fragment>
                <p>Liked by:</p>
                <ul>
                    {filteredProfile.map(profile => (
                        <li key={profile.userID}>
                            {users[profile.userID].name}
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}
export default UsersList;