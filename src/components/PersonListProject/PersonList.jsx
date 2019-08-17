import React from 'react';
import './person.css';
import Person from "./Person";

class PersonList extends React.Component{
    render() {
        return(
            <section className='person-list'>
                <Person
                    img='34'
                    name='john'
                    job='developer'
                />
                <Person
                    img='32'
                    name='mamun'
                    job='designer'
                >
                    <p>You can use AJAX to call the Random User Generator API</p>
                </Person>
                <Person
                    img='31'
                    name='jony'
                    job='engineer'
                />
            </section>
        );
    }
}

export default PersonList;



/*
PersonList
    Person
    Person
    Person
 */