import React from  'react';
import Try3 from "./Try3";

function Try2({user}) {
    return(
        <div className="UserInfo">
            <Try3 user={user} />
            <div className="UserInfo-name">{user.name}</div>
        </div>
    );
}

export default Try2;