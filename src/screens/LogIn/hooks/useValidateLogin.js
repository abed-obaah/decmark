import { useState } from 'react';

export default useValidateLogin = (inputs, mode) => {
  const [errors, setErrors] = useState({});

  const handleError = (input, errMsg) => {
    setErrors((prevState) => ({
      ...prevState,
      [input]: errMsg
    }))
  }
  
  const hanleValidateLogin = () => {
    let valid = true
    if(mode === 'email') {
      if(!inputs.email) {
        handleError( "email", "Please enter your email")
        valid = false
      }
      if(!inputs.email.match(/\S+@\S+\.\S+/)) {
        handleError( "email", "Please enter a valid email address")
        valid = false
      }
    }

    if(mode === 'phoneNumber') {
      if((inputs.phoneNumber.length > 10) || (inputs.phoneNumber.length < 10)) {
        handleError("phoneNumber", "Number should be 10 digits")
      } 
    }

    if(!inputs.password) {
      handleError("password", "Please enter your password")
      valid = false
    } else if (inputs.password.length < 8) {
      handleError("password", "Password must be at least 8 characters")
      valid = false
    }
    
    return valid;
  }

  return {
    errors,
    handleError,
    hanleValidateLogin
  }
};
