import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [PasswordShowState, setPasswordShowState] = useState('password'); // Kezdeti állapot: 'password'
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://jwt.sulla.hu/login', { username, password });
      localStorage.setItem('token', data.token);
      navigate('/termekek');
    } catch (error) {
      setError('Hibás bejelentkezési adatok!');
    }
  };

  const togglePasswordShowState = () => {
    setPasswordShowState(PasswordShowState === 'password' ? 'text' : 'password');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>Bejelentkezés</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Felhasználónév</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Jelszó</label>
              <div className="input-group">
                <input
                  type={PasswordShowState}
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="input-group-text" onClick={togglePasswordShowState}>
                  {PasswordShowState === 'password' ? '👁️' : '🚫'}
                </span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Bejelentkezés</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
