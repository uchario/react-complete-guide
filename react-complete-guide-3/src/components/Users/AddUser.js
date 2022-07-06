import React from 'react';

const AddUser = (props) => {
    return (
        <form>
            <label>Username</label>
            <input id="username" type="text"/>
            <label>Age</label>
            <input id="age" type="number"/>
        </form>
    )
}

export default AddUser;