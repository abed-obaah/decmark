import { useState, useEffect } from "react";

export default (inputs) => {
  const [errors, setErrors] = useState({});

  const handleError = (input, errMsg) => {
    setErrors((prevState) => ({
      ...prevState,
      [input]: errMsg,
    }));
  };

  useEffect(() => {
    if (inputs.first_name) {
      handleError("first_name", null);
    }
    if (inputs.last_name) {
      handleError("last_name", null);
    }
    if (inputs.email && inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("email", null);
    }
    if (inputs.password && inputs.password.length >= 8) {
      handleError("password", null);
    }
  }, [inputs]);

  const handleValidateForm = () => {
    let valid = true;
  
    if (!inputs.first_name) {
      handleError("first_name", "Please enter your First Name");
      valid = false;
    }
  
    if (!inputs.last_name) {
      handleError("last_name", "Please enter your Last Name");
      valid = false;
    }
  
    if (inputs.email && !inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("email", "Please enter a valid email address");
      valid = false;
    }
  
    if (inputs.email && !inputs.email.trim()) {
      handleError("email", "Please enter your email");
      valid = false;
    }
  
    if (!inputs.password) {
      handleError("password", "Please enter your password");
      valid = false;
    } else if (inputs.password.length < 8) {
      handleError("password", "Password must be at least 8 characters");
      valid = false;
    }
  
    return valid;
  };
  

  // const handleValidatePostServiceForm= () => {
  //   let valid = true;
  //   if (!inputs.first_name) {
  //     handleError("first_name", "Please enter your First Name");
  //     valid = false;
  //   }
  //   if (!inputs.last_name) {
  //     handleError("last_name", "Please enter your Last Name");
  //     valid = false;
  //   }
  //   return valid;
  // };

  return {
    errors,
    handleError,
    handleValidateForm,
    // handleValidatePostServiceForm,
  };
};
