import React from 'react';

import UserItem from './UserItem';
import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
            {props.users.map((user) => (
                    <UserItem
                        key={user.id}
                        id={user.id}
                    >
                        {user.name} ({user.age} years old)
                    </UserItem>
            ))}
            </ul>
        </Card>
    )
        
    
}

export default UsersList;