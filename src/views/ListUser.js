import { useState, useEffect } from 'react';
import useFetch from '../customize/fetch';

const ListUser = () => {
    const { data: dataUser, isLoading, isError } = useFetch('https://reqres.in/api/users?page=1')

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === false && isLoading === false && dataUser && dataUser.length > 0 &&
                        dataUser.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })}
                    {isLoading === true &&
                        <tr>
                            <td colSpan={5} style={{ textAlign: 'center' }}>Loading data...</td>
                        </tr>
                    }
                    {isError === true &&
                        <tr>
                            <td colSpan={5} style={{ textAlign: 'center' }}>Something wrong...</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default ListUser;