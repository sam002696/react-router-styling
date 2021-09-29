import React, { useEffect, useState } from 'react';
import Users from './Users';

const About = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="grid lg:grid-cols-3 p-36 gap-8">
            {
                users.map(user => <Users user={user} key={user.id}></Users>)
            }
        </div>
    );
};

export default About;