import React from 'react';
import top from './top.jpeg'; // 画像のパスは適切に修正してください
import './style.css';

export const Header = () => {
  return (
    <header id="header">
      <form action="javascript:void(0);" method="get">
        <h1>
          <a href="index.html">
            <img className="top" src={top} alt="TOPに戻る" />
          </a>
        </h1>
      </form>
      <nav>
        <ul className="main-nav">
          <li><a href="incomplete.html">未完了</a></li>
          <li><a href="complete.html">完了</a></li>
        </ul>
      </nav>
    </header>
  );
};
