import React from 'react';

class Person extends React.Component{
    render() {
        const{img, name, job, children} = this.props;
        const imageUrl = `https://randomuser.me/api/portraits/men/${img}.jpg`;
        return(
            <article className='person'>
                <img src={imageUrl} alt='MAMUN'/>
                <h4>{name}</h4>
                <h4>{job}</h4>
                {children}
            </article>
        );
    }
}

export default Person;