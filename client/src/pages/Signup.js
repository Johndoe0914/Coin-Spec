
import React, {useState, useEffect} from 'react'
import Register from '../actions/user';
import { useStateValue } from "../StateProvider";
import axios from 'axios';

import './Signup.css';

const Signup = () => {
    const [ dispatch] = useStateValue();

   


    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        repeatpassword: ''
    })

    const {name, email, password, repeatpassword} = formData

    const handleChange = (e) => {
    setFormData({...formData ,[e.target.name] : e.target.value })

 
}
    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log('csubmit')

        if(password !== repeatpassword) {
            alert('passwords dont match')
        } else {
            const newUser = {
                name,
                email,
                password
            }

            const body = JSON.stringify(newUser)
 
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/users', body, config)
    // dispatch({
    //     type: 'REGISTER_SUCCESS',
    //     payload: res.data

    // })
    
    console.log(res ,"success")
    
    } catch(err) {
        // dispatch({
        //     type: 'REGISTER_FAILED',
        // })
        console.log(err)
    }
            
            // Register({name, email, password})
        }
        

    }
    return (
        <div className='signup'>
          

            <div className='signup__form'>
            <h1>Sign Up With Us</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label>Name</label>
                    <input onChange={(e) => handleChange(e)} type='text' name='name'/>
                    <label>Email</label>
                    <input onChange={(e) => handleChange(e)} type='email' name='email' />
                    <label>Password</label>
                    <input onChange={(e) => handleChange(e)} type='password' name='password'/>
                    <label>Repeat Password</label>
                    <input onChange={(e) => handleChange(e)} type='password' name='repeatpassword' />

                    <button >Submit</button>
                </form>
            </div>
        </div>
    )
}


export default Signup