import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useQuery } from 'react-query';
import Modal from '../../shared/Modal/Modal';

const About = () => {
    const [user, setUser] = useState(null);

    const { data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = res.json();
            return data;
        }
    })
    return (
        <div>
            {
                users?.map(user => <div
                    key={user._id}
                    className='flex justify-center my-10'>
                    <div className="card w-96 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <p>{user.email}</p>
                            <p>{user.address}</p>
                            <p>{user.university}</p>
                            <div className="card-actions justify-end">
                                <label
                                    onClick={() => setUser(user)}
                                    htmlFor="my_modal"
                                    className="btn btn-sm text-white">Edit</label>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            {
                user && <Modal
                user={user}
                ></Modal>
            }
        </div>
    );
};

export default About;