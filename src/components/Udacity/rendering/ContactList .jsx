import React from 'react';

class ContactList extends React.Component {
    render() {
        const {contacts: people} = this.props;
        return(
            <ol>
                {people.map(person => (
                    <li key={person.name}>{person.name}</li>
                ))}
            </ol>
        );
    }
}

export default ContactList;