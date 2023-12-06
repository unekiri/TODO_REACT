import React, { useEffect } from 'react';
import { Header} from './Header';
import { getItems } from './GetItems'; 
import '../stylesheets/style.css';

export const Complete = () => {
  useEffect(() => {
    getItems(true);
  }, []);
  return (
    <>
    <Header />
    <main>
    <div className="container">
      <div className="complete-area">
        <p className="title">完了一覧</p>
        <div className="headline">
          <span className="contents">内容</span>
          <span className="plan">完了日</span>
        </div>
          <ul id="complete-list">
            <div className="list-row">
            </div>
          </ul>
      </div>
    </div>
    </main>
    </>
  );
};