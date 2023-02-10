import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
const data = {
    jaehoon: {
        name: '이재훈',
        description: '리액트를 좋아하는 개발자',
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동 주인공',
    },
};

const Profile = () => {
    const { id } = useParams();
    const location = useLocation();
    console.log(location);

    const profile = data[id];
    if (!profile) {
        return <div>존재하지 않는 사용자</div>;
    }
    return (
        <div>
            <h3>
                {id} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};
export default Profile;
