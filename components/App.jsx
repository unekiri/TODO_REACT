import React, { useState } from "react";
import "./style.css";

export const App = () => {
  return null;
}

<body>
  <header id="header"></header>
  <main>
    <div class="container">
      <div class="incomplete-area">
        <p class="title">未完了一覧</p>
        <div class="headline">
          <span class="contents">内容</span>
          <span class="plan">予定日</span>
        </div>
        <ul id="incomplete-list">
          <div class="list-row">
            <li>未完了のTODO</li>
            <span class="detail-plan">2023/11/17</span>
          </div>
        </ul>
      </div>
      <div class="complete-area">
        <p class="title">完了一覧</p>
        <div class="headline">
          <span class="contents">内容</span>
          <span class="plan">完了日</span>
        </div>
        <ul id="complete-list">
          <div class="list-row">
            <li>完了したTODO</li>
            <span class="detail-plan">2023/11/17</span>
          </div>
        </ul>
      </div>
    </div>
  </main>
  <script src="./index.js"></script>
  <script type="text/javascript">
    getItems(false);
  </script>
</body>
</html>