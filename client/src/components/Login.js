// client/src/Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Авторизация прошла успешно, перенаправляем на нужную страницу
        const userData = await response.json();
        console.log('User data:', userData);

        // В зависимости от роли пользователя, перенаправляем на соответствующую страницу
        switch (userData.role) {
          case 'Admin':
            history.push('/admin');
            break;
          case 'Analyst':
            history.push('/analyst');
            break;
          case 'Client':
            history.push('/homepage');
            break;
          default:
            console.warn('Unknown role:', userData.role);
        }
      } else {
        // Ошибка при авторизации
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
