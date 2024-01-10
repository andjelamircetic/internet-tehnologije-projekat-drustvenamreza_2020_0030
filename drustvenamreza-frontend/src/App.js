
import { BrowserRouter,Route,Routes, Navigate  } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    return <Navigate to="/" />;
  };

  return (
    <div className="App">
      <BrowserRouter>
        {loggedInUser && <NavBar  pretrazi={pretrazi} loggedInUser={loggedInUser} handleLogout={handleLogout} />}
        <Routes>
          <Route
            path="/"
            element={loggedInUser ? <Navigate to="/feed" /> : <LoginForm onLogin={handleLogin} />}
          />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
