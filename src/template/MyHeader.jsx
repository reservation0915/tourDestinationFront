import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MyHeader = () => {

  const [username, setUsername] = useState()

  const kakaoLogin = () => {
    // 카카오 로그인 URL로 이동
    window.location.href = "https://kauth.kakao.com/oauth/authorize?client_id=4849e81d641418ab8434257b184d1238&" +
      "redirect_uri=http://localhost:3000/login/kakao/callback&response_type=code";
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); 
    window.location.reload()
  };

  useEffect(() => {
    const username = localStorage.getItem('username');
    setUsername(username)
  }, []);

  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  return (
    <header style={headerStyle}>
      <div style={logoStyle}><Link to="/" style={linkStyle}>하이텐트</Link></div>
      <nav style={navStyle}>
        <ul style={menuStyle}>
          <li style={menuItemStyle}>
            <Link to="/" style={linkStyle}>채용사이트 추천</Link>
          </li>
          <li style={menuItemStyle}>
            <Link to="/" style={linkStyle}>멘토</Link>
          </li>
          <li style={menuItemStyle}>
            <Link to="/" style={linkStyle}>취업후기</Link>
          </li>
          <li style={menuItemStyle}>
            <Link to="/" style={linkStyle}>직종추천</Link>
          </li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <>
          <div style={loginButtonStyle}>
            <div style={loginStyle}>
              <p>{username}</p>
            </div>
            <div style={loginStyle}>
              <p onClick={handleLogout}>Logout</p>
            </div>
          </div>
        </>
      ) : (
        <div style={logoutButtonStyle}>
          <p onClick={kakaoLogin}>Login</p>
        </div>
      )}
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10px',
};

const logoStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginRight: '80px',

};

const navStyle = {
  display: 'flex',
  alignItems: 'center',

};

const menuStyle = {
  listStyle: 'none',
  display: 'flex',
  padding: '0',
  margin: '0',
};

const menuItemStyle = {
  marginRight: '50px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const loginButtonStyle = {
  display: 'flex',
  marginLeft: '700px'
};

const loginStyle = {
  padding: '0 10px',
}

const logoutButtonStyle = {
  display: 'flex',
  marginLeft: '800px'
};

export default MyHeader;