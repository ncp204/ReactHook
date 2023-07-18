import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'

const ListUser = () => {
    let [dataUser, setDataUser] = useState([])
    const [loading, setLoading] = useState(true)

    // = componentDidmount() {}
    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get('https://reqres.in/api/users?page=1')
            let data = res && res.data && res.data.data ? res.data.data : [];
            setDataUser(data);
            setLoading(false)
        }

        setTimeout(() => {
            fetchData();
        }, 2000)
    }, [])

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
                    {loading === false && dataUser && dataUser.length > 0 &&
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
                    {loading === true &&
                        <tr>
                            <td colSpan={5} style={{ textAlign: 'center' }}>Loading data...</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default ListUser;