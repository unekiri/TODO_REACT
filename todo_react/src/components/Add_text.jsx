import React from 'react';
import { Header} from './Header';
import '../stylesheets/style.css';

export const Add_text = () => {
  return (
    <>
    <Header />
    <main>
    <div className="container">
      <form action="javascript:void(0);" method="post" onSubmit="addItem()">
        <div className="incomplete-area">
          <div className="another-page">
            <p>タスクの内容</p>
            <textarea id="add-name" placeholder="100文字以内の入力"></textarea>
          </div>
          <div className="another-page">
            <p>完了予定日</p>
            <input id="add-date" type="date"/>
          </div>
          <div className="end_button">
            <button type="submit">終了</button>
          </div>
        </div>
      </form>
    </div>
    </main>
    </>
  );
};