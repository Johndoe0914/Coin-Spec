import { connect } from 'mongoose';
import React, {useState, useEffect} from 'react'
import register from '../actions/auth';
import PropTypes from 'prop-types';
import './Signup.css';

const Signup = ({register}) => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        repeatpassword: ''
    })

    const {name, email, password, repeatpassword} = formData

    const handleChange = (e) => {
    setFormData({...formData ,[e.target.name] : e.target.value })

    console.log(formData)
}
    const handleSubmit = (e) => {
        e.preventDefault()

        if(password !== repeatpassword) {
            alert('passwords dont match')
        } else {
            register({name, email, password})
        }
        

    }
    return (
        <div className='signup'>
          

            <div className='signup__form'>
            <h1>Sign Up With Us</h1>
                <form>
                    <label>Name</label>
                    <input onChange={(e) => handleChange(e)} type='text' name='name'/>
                    <label>Email</label>
                    <input onChange={(e) => handleChange(e)} type='email' name='email' />
                    <label>Password</label>
                    <input onChange={(e) => handleChange(e)} type='password' name='password'/>
                    <label>Repeat Password</label>
                    <input onChange={(e) => handleChange(e)} type='password' name='repeatpassword' />

                    <button onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>
            </div>
        </div>
    )
}

Signup.propTypes = {
    register: PropTypes.func.isRequired,
}


export default connect(
    null, {register}
)(Signup);
