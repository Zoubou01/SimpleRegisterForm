import React , {useState} from 'react';

import './App.css';

function App(){
  const [values,setValues] = useState ({
    fistName:"",
    lastName:"",
    email:"",
  });
  const [fn,setFn] = useState(true);
  const [ln,setLn] = useState(true);
  const [em,setEm] = useState(true);
  const [register,setRegister] = useState(false);


  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
    setFn(false);
  }
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
    setLn(false);
  }
  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
    setEm(false);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
      setRegister(true);
  }
  return (
  <div className='forma-container'>
    <form className='forma' onSubmit={handleSubmit}>
      <input 
      value={values.firstName}
      className='la'
      placeholder='First Name'
      name='firstName' 
      onChange={handleFirstNameInputChange}/>
      {fn && register ? <span>Please Enter First Name</span> : null }
      <input 
      value={values.lastName}
      className='la'
      placeholder='Last Name'
      name='lastName' 
      onChange={handleLastNameInputChange}/>
      {ln && register ? <span>Please Enter Last Name</span> : null }
        <input 
      value={values.email}
      className='la'
      placeholder='Email'
      name='email' 
      onChange={handleEmailInputChange}/>
      {em && register ? <span>Please Enter Email</span> : null }
        <button classname='la'
        type='submit'>
          Register
        </button>
    </form>
  </div>
  )
}

export default App;
