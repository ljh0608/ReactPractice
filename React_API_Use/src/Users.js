import React, { useState } from 'react';
import axios from 'axios';
import { useAsync } from 'react-async';
import User from './User';

const getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data);
    return response.data;
};

const Users = () => {
    const [userId, setUserId] = useState(null);
    const {
        data: users,
        error,
        isLoading,
        reload,
    } = useAsync({
        preomieFn: getUsers,
    });

    if (isLoading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return <button onClick={reload}>불러오기</button>;
    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id} onClick={() => setUserId(user.id)} style={{ cursor: 'pointer' }}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={reload}>다시 불러오기</button>
            </div>
            {userId && <User id={userId} />}
        </div>
    );
};
export default Users;
