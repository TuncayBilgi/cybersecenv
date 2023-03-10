import React from 'react'
import './form.css'
import SubmitButton from './submitButton'
import { useState, useEffect } from 'react'

const Form = () => {

    const [login, setLogin] = useState('default')
    const [password, setPassword] = useState('default')
    

  return (
    <>
        <div className='form-container'>
            <h2 className='form-title'>Please sign up</h2>
            <div>
                <label className='form-label'> Login :
                    <input className='form-item'
                    onChange = {(e) => {setLogin(e.target.value)}}
                    />
                </label>
            </div>
            <div>
                <label className='form-label'> Password :
                    <input className='form-item'
                    type = 'password'
                    onChange = {(e) => {setPassword(e.target.value)}}
                    />
                </label>
            </div>
            <div className='submit-button'>
                <SubmitButton message = {{login : login, password : password}}></SubmitButton>
            </div>
        </div>
    </>
  )
}

export default Form