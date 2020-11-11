import axios from 'axios';
import React from 'react';



//REGISTER  USER
const Register = async({name, email, password}) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({name, email, password})
 
    try {
        const res = await axios.post('/api/users', body, config)
    // dispatch({
    //     type: 'REGISTER_SUCCESS',
    //     payload: res.data

    // })
    console.log("success")
    
    } catch(err) {
        // dispatch({
        //     type: 'REGISTER_FAILED',
        // })
        console.log(err)
    }
}


export default Register
