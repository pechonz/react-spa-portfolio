import '../App.css';
import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect'
import profilepic from '../img/logo.png'

function Home() {
  return (
    
    <div className="condiv home header-info">
      <h2>Hi, I am </h2>
      <h1><ReactTypingEffect text={['Naruephon', 'Developer']} speed={300} eraseDelay={3000} className="typingeffect"/></h1>
      <div data-aos="fade-down"><img src={profilepic} alt="profile" className="profilepic" /></div>
      <div>
        <a href="https://www.facebook.com/P3CHON" target="_blank"><i class="fa fa-facebook fa-4x icon-3d"></i></a>
        <a href="https://www.instagram.com/pechon11/" target="_blank"><i class="fa fa-instagram fa-4x icon-3d"></i></a>
        <a href="https://github.com/pechonz" target="_blank"><i class="fa fa-github fa-4x icon-3d"></i></a>
        <a href="https://www.linkedin.com/in/naruephon-sooksinchai-4a12101b5/" target="_blank"><i class="fa fa-linkedin fa-4x icon-3d"></i></a>
      </div>
    </div>
  );
}

export default Home;