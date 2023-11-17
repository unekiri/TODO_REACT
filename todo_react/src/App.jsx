import React from 'react';
import { Header }  from './Header';
import './style.css';

export const  App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="incomplete-area">
            <p className="title">未完了一覧</p>
            <div className="headline">
              <span className="contents">内容</span>
              <span className="contents">予定日</span>
            </div>
            <ul id="incomplete-list">
              <div className="list-row">
                <li>未完了のTODO</li>
                <span className="detail-plan">2023/11/20</span>
              </div>
            </ul>
          </div>
          <div className="complete-area">
            <p className="title">完了一覧</p>
            <div className="headline">
              <span className="contents">内容</span>
              <span className="contents">完了日</span>
            </div>
            <ul id="complete-list">
              <div className="list-row">
                <li>完了したTODO</li>
                <span className="detail-plan">2023/11/20</span>
              </div>
            </ul>
          </div>
       </div>
      </main>
    </>
  );
};