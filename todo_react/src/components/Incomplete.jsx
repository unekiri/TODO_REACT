import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header} from './Header';
import { getItems } from './GetItems'; 
import '../stylesheets/style.css';

export const Incomplete = () => {
  useEffect(() => {
    getItems(true);
  }, []); //第二引数にからの配列を渡す事で、マウントされた時に発火される
  return (
    <>
    <Header />
    <main>
    <div className="add_text">
      <Link to="/addtext">TODOを追加する</Link>
    </div>
    <div className="container">
      <div className="incomplete-area">
        <p className="title">未完了一覧</p>
        <div className="headline">
          <span className="contents">内容</span>
          <span className="plan">予定日</span>
        </div>
          <ul id="incomplete-list">
            <div className="list-row">
            </div>
          </ul>
      </div>
    </div>
    </main>
    </>
  );
};
