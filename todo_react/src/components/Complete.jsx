import React, { useEffect } from 'react';
import { Header} from './Header';
import { ViewComponent } from './ViewComponent';
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
        <ViewComponent
          bkcolor="#ffffe0" 
          title="完了一覧"
          content="内容"
          plan="完了日"
        >
        <ul id="complete-list">
        </ul>
        </ViewComponent>
      </div>
    </main>
    </>
  );
};