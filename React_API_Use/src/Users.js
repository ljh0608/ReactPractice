import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // 요청이 시작할 때에는 error와 user를 초기화하고 loading의 상태를 true로 바꾼다.
                setError(null);
                setUsers(null);
                setLoading(true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data); //data는 response 안에 들어있다.
                console.log(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);

    if (loading) return <div>로딩중 ...</div>;
    if (error) return <div>에러 발생</div>;
    if (!users) return null;

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Users;

// import { useReducer, useEffect, useCallback } from 'react';

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'LOADING':
//             return {
//                 loading: true,
//                 data: null,
//                 error: null,
//             };
//         case 'SUCCESE':
//             return {
//                 loading: false,
//                 data: action.data,
//                 error: null,
//             };
//         case 'ERROR':
//             return {
//                 loading: false,
//                 data: null,
//                 error: action.error,
//             };
//         default:
//             throw new Error(`Unhandled action type: ${action.type}`);
//     }

// };
