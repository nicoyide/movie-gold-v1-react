import React, { useState } from 'react';
import { setAuthToken } from "../util/auth"; // Importing login and setAuthToken
import { login } from "../../api/axiosConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [useremail, setUseremail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setErrorMessage(null);
    
    try {
      const data = await login(useremail, username, password);
      
      if (data.token === null) {
        setLoading(false);
        setErrorMessage(data.status);
      } else {
        setLoading(false);
        setAuthToken(data.token); // Store the authentication token
        navigate('/');
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage("An error occurred while logging in.");
    }
  };

  // Rest of the component remains the same
};

export default Login;
