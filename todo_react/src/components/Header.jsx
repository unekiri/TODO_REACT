import React from 'react';
import top from '../images/top.jpeg';
import '../stylesheets/style.css';

export const Header = () => {
  return (
    <header id="header">
      <h1>
        <a href="index.html">
          <img className="top" src={ top } alt="TOPに戻る" />
        </a>
      </h1>
      <nav>
        <ul className="main-nav">
          <li><a href="#">未完了</a></li>
          <li><a href="#">完了</a></li>
        </ul>
      </nav>
    </header>
  );
};
