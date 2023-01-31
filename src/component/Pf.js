import React from 'react';
import axios from 'axios';
import useAsync from './useAsync';

async function getLists(params) {
    const response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/1iARCqkYaPh4RVgzFd0jUDJ5f0X1-xhtYnUlZtRMcGsk/values/${params.name}?key=AIzaSyA-crA0klE95-_kJpv1W13YUOks5Tu7Bz0`
    );
    
    return response.data;
}

function User({ params }) {
    const [state] = useAsync(() => getUser(params), [params]);
    const { loading, data: lists, error } = state;

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!lists) return null;

    console.log('dddd');
    return (
    <div>
        {/* <h2>{lists.username}</h2>
        <p>
        <b>Email:</b> {lists.email}
        </p> */}
    </div>
    );
}

export default User;