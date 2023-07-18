import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../customize/fetch';

const UserDetail = () => {
    let { id } = useParams();
    let history = useHistory();

    const handleBackData = () => {
        history.push('/')
    }

    const { data: userDetail, isLoading, isError } = useFetch(`https://reqres.in/api/users/` + id)

    return (
        <>
            <div>
                <span onClick={handleBackData}>
                    &lt;== Back
                </span>
            </div>
            <div>
                User detail with id: {id}
            </div>
            <div>
                {isLoading === true ?
                    <>Loading user data...</> :
                    <>
                        {!userDetail ?
                            <div>User data is empty</div> :
                            <div>
                                <div>ID: {userDetail.id}</div>
                                <div>First Name: {userDetail.first_name}</div>
                                <div>Last Name: {userDetail.last_name}</div>
                                <div>Email: {userDetail.email}</div>
                            </div>
                        }
                    </>
                }
            </div>
        </>
    )
}

export default UserDetail;