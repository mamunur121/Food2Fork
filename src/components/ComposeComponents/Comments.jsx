import React from 'react';
import Comment from "./Comment";


const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/200/300',
    },
};
class Comments extends React.Component {

    render() {
        const {date, text, author} = comment;
        return (
            <React.Fragment>
                <Comment
                    date={date}
                    text={text}
                    author={author}
                />
            </React.Fragment>
        );
    }
}


export default Comments;
