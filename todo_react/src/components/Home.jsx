import React, { useEffect } from 'react';
import { Header }  from './Header';
import { ViewComponent } from './ViewComponent';
import { getItems } from './GetItems';
import '../stylesheets/style.css';

export const Home = () => {
  useEffect(() => {
    getItems(false);
  }, []); // 第二引数が空の場合、初回レンダリング時のみ実行される

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <ViewComponent 
            title="未完了一覧"
            content="内容"
            plan="予定日"
          />
          <ViewComponent 
            title="完了一覧"
            content="内容"
            plan="完了日"
          />
       </div>
      </main>
    </>
  );
};