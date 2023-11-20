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
              <li>完了したTODO</li>
              <div className="item-area">
                <span className="detail-plan">2023/11/17</span>
                <button onClick="#">編集</button>
                <button>削除</button>
                <button onClick="#">未完了へ変更</button>
            </div>
            </div>
          </ul>
      </div>
    </div>
    </main>
    </>
  );
};