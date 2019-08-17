import React from 'react';

class Try3 extends React.Component {
    render() {
        const {user} = this.props;
        return (
            <img
                className="Avatar"
                src={user.avatarUrl}
                alt={user.name}
            />
        );
    }
}
export default Try3;