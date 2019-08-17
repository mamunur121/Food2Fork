import React from 'react';
import ContactList from "./ContactList ";

class RenderMain extends React.Component {
    render() {
        return (
            <div>
                <ContactList
                    // {} --> first {} is a js starting indicator, don't think a object;
                    contacts = {
                        [
                            { name: 'James' }, { name: 'Mark' }, { name: 'Steven' }
                        ]
                    }
                />

                <ContactList
                    contacts={[{ name: 'Evi' }, { name: 'Sarah' }, { name: 'Susan' }]}
                />
                <ContactList
                    contacts={[{ name: 'Spot' }, { name: 'Rover' }, { name: 'Fido' }]}
                />

            </div>
        );
    }
}

export default RenderMain;

