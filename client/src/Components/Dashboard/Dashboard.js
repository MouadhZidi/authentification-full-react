import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../JS/actions/user'
import {useHistory} from 'react-router-dom'

const Dashboard = () => {
    const dispatch =useDispatch();
    const history=useHistory();
    return (
        <div>
            <button onClick={()=>{
            dispatch(logout());
            history.push("/");
            }} >Logout</button>
            Dashboard</div>
    )
}

export default Dashboard
