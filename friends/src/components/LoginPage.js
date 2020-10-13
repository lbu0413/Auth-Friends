import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'


const initialValues = {
    username: '',
    password: '',
}

const LoginPage = () => {
    
    const history = useHistory()

    const [formValues, setFormValues] = useState(initialValues)
    const changeHandler = evt => {
        const { name, value } = evt.target
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        axios.post('http://localhost:5000/api/login', formValues)
        .then(res => {
            console.log(res.data)
            window.localStorage.setItem('token',res.data.payload)
            history.push("/FriendsList")
        })
        .catch(err => {
            console.log(err)
        })
        setFormValues(initialValues)
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>Username
                    <input 
                    type='text' 
                    name='username' 
                    value={formValues.username}
                    onChange={changeHandler}
                    />
                </label>
                <label>Password
                    <input 
                    type='text'
                    name='password'
                    value={formValues.password}
                    onChange={changeHandler}
                    />   
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginPage