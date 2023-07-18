import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'

const ListUser = () => {
    let [dataUser, setDataUser] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    // = componentDidmount() {}
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await axios.get('https://1reqres.in/api/users?page=1')
                let data = res && res.data && res.data.data ? res.data.data : [];
                setDataUser(data);
                setIsLoading(false)
                setIsError(false)
            } catch (error) {
                setIsError(true)
                setIsLoading(false)
            }

        }

        fetchData()

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