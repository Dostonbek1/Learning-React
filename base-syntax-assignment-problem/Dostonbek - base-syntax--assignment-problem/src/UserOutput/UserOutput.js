import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.username}</p>
            <p>Hello, World! This is React Speaking... How is everybody doing?</p>
        </div>
    )
}

export default userOutput;