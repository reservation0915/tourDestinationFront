import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import '../../src/css/hightent.css';
import find from '../../src/css/img/find.png'
import logo from '../../src/css/img/logo.png'


const MyHeader = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
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
  const mypage = () => {
    nav('/mypage')
  }
  const siteRecommend = () => {
    nav('/siteRecommend')
  }
  const mentors = () => {
    nav('/mentors')
  }
  const review = () => {
    nav('/review')
  }
  const recommend = () => {
    nav('/recommend')
  }

  const homePage = () => {
    nav('/')
  }
  const mentorRequests = () => {
    nav('/mentorRequests')
  }

  const mbti = () => {
    nav('/mbti')
  }

  const isLoggedIn = useSelector(state => state.login.isLoggedIn);


  return <div id="header">
    <div id="header_wrap">
      <div id="header_content">
        <button onClick={homePage} className="header_menu">
          <img src={logo} width="150" height="auto"/>
        </button>
      </div>

      <div id="header_content">
        <button className="header_menu">사이트추천</button>
      </div>

      <div id="header_content">
        <button onClick={mentors} className="header_menu">멘토</button>
      </div>

      <div id="header_content">
        <button onClick={review} className="header_menu">취업후기</button>
      </div>

      <div id="header_content">
        <button onClick={mbti} className="header_menu">직종추천</button>
      </div>
      <div id="header_content">
        <button onClick={review} className="header_menu_login">리뷰</button>
      </div>
      <div id="header_content">
        <button onClick={mentorRequests} className="header_menu">멘토신청</button>
      </div>
      <div id="header_content">
        <button onClick={mypage} className="header_menu_login">내정보</button>
      </div>

      {isLoggedIn ? (
          <>
            <div id="header_content">
              <button className="header_menu_login">{username}님</button>
            </div>
            <div id="header_content">
              <button onClick={handleLogout} className="header_menu_login">Logout</button>
            </div>
          </>
      ) : (
          <div id="header_content">
            <button onClick={kakaoLogin} className="header_menu_login">Login</button>
          </div>
      )}
    </div>


  </div>

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
}

export default MyHeader;