import React from 'react'
import { useState } from 'react'
import './form.css'

const SubmitButton = ({message} : any) => {
  const [state, setState] = useState('neutral')
  const [data,setData] = useState('')

  function submitForm(message : any){  
    const requestOptions = {
      method: 'POST',
      headers : {'Content-Type' : 'application/json'},
      body: JSON.stringify(message),
  };
    try {fetch('http://localhost:3000/account/create', requestOptions)
      .then(response => response.json())
      .then(data =>{ if (data.valid){
                      setState('created')
                    }
                    else if (data.name=='Error : account already exists'){
                      setState('alreadyExists')
                    }
                    else if (data.name=='Error : invalid password'){
                      setState('invalidPassword')
                    }
                    setData(data)
                  });
    }
    catch (err) {console.log(err);}
  }



  if (state == 'created'){
    return (
      <>
        <button onClick = {()=>submitForm(message)} id = 'className'> Sign Up </button>
        <p className='created'>Account succesfully created !</p>
      </>
    )
  }
  else if (state == 'alreadyExists'){
    return (
      <>
        <div className ='button-message-box'>
          <button onClick = {()=>submitForm(message)}>Sign up</button>
          <p className='button-message'>Account already exists! Try another name.</p>
        </div>
      </>
    )
  }
  else if (state == 'invalidPassword'){
    return (
      <>
        <div className ='button-message-box'>
          <button onClick = {()=>submitForm(message)}>Sign up</button>
          <p className='button-message'>Invalid password. Must be at least 7 characters long.</p>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <button onClick = {()=>submitForm(message)}>Sign up</button>
      </>
    )
    
  }
}

export default SubmitButton
