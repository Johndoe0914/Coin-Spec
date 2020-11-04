import React, {useState, useEffect} from 'react'
import './Signup.css';

const Signup = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        repeatpassword: ''
    })

    const handleChange = (e) => {
    setFormData({...formData ,[e.target.name] : e.target.value })

    console.log(formData)
}
    const handleSubmit = (e) => {
        e.preventDefault()

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

                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
