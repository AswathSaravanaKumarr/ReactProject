// App.js
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (formData) => {
    // Handle authentication logic (not implemented in this example)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="App">
      <div className="container">
        {isLogin ? (
          <Login onToggle={handleToggle} onLogin={handleLogin} />
        ) : (
          <h1>Sign Up Component Goes Here</h1>
        )}
      </div>
    </div>
  );
};

export default Login;
