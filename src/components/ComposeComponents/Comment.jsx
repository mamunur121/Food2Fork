import React from 'react';
import UserInfo from "./UserInfo";
function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment({date, text, author}) {
    return (
        <div className="Comment">
            <UserInfo user={author} />
            <div className="Comment-text">{text}</div>
            <div className="Comment-date">
                {formatDate(date)}
            </div>
        </div>
    );
}

export default Comment;