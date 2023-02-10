import React from 'react';
import axios from 'axios';

import { useAsync } from 'react-async';

const getUser = async ({ id }) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log(response.data);
    return response.data;
};

const User = ({ id }) => {
    const {
        data: user,
        error,
        isLoading,
    } = useAsync({
        promisFn: getUser,
        id,
        watch: id, //watch에 넣은 값 = id 가 바뀔 때 마다 promisFn에 넣은 함수 다시호출
    });

    if (isLoading) return <div>로딩중..</div>;
    if (error) return <div>User 에러가 발생했습니다</div>;
    if (!user) return null;
    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email : </b> {user.email}
            </p>
        </div>
    );
};
export default User;
