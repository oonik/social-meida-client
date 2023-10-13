import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
       return <p className='text-2xl text-center text-purple-400'>Loading.....</p>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>;
};

export default PrivateRouter;