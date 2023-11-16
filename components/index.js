import React from "react";
import ReactDom from "react-dom";

import { App } from "./App";

ReactDom.render(<App />, document.getElementById("root"));

// headerの共通化
{
  document.getElementById('header').innerHTML =  `
      <form action="javascript:void(0);" method="get" onclick="getItems()">
        <h1><a href="index.html"><img class="top" src="../images/top.jpeg" alt="TOPに戻る"</a></h1>
      </form>
      <nav>
        <ul class="main-nav">
          <li><a href="incomplete.html">未完了</a></li>
          <li><a href="complete.html">完了</a></li>
        </ul>
      </nav>
  `;
}

let todos = []; // グローバル変数

// GETアクションのイベントハンドラ

function getItems(showButtons) {
  fetch("https://localhost:7034/api/todoitems", {
    method: 'GET',
  })
    // リクエストが成功すると、下記でresponseオブジェクトを処理する
    .then(response => response.json())
    .then(data => {
      _displayItems(data, showButtons);
    })
    .catch(error => console.error('Unable to get items.', error));
}

// イベントボタンの表示 or 非表示の分岐処理
function _displayItems(data, showButtons) {
  data.forEach(item => {

    const completeList = document.getElementById("complete-list");
    const incompleteList = document.getElementById("incomplete-list");
    
    const div_list = document.createElement("div");
    div_list.className = "list-row";

    const li = document.createElement("li");
    li.innerText = item.name;


    // TODOが50文字以上の場合、文字列を折り返す処理
    if (li.innerText.length >= 50) {
      const splitText = li.innerText.match(/.{1,50}/g); //50文字以下の文字列と51文字以上の文字列を分割して配列に格納する
      li.innerText = splitText.join('\n'); // 分割した文字列を改行を挟んで結合させる
    }

    const div_item = document.createElement("div");
    div_item.className = "item-area";

    // item.dateをDateオブジェクトに変換する
    const date = new Date(item.date);
    const formattedDate = date.toLocaleString("ja-JP", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    const span = document.createElement("span");
    span.className = "detail-plan";
    span.innerText = formattedDate;

    div_list.appendChild(li);
    div_list.appendChild(div_item);
    div_item.appendChild(span);

    if (showButtons) {
      const editButton = document.createElement("button");
      editButton.innerText = '編集';
      editButton.addEventListener('click', () => {
        const edit_item = todos.find(edit_item => edit_item.id === item.id);
        editItem(edit_item.id);
      });

      const deleteButton = document.createElement("button");
      deleteButton.innerText = '削除';
      deleteButton.addEventListener('click', () => {
        const delete_item = todos.find(delete_item => delete_item.id === item.id);
        deleteItem(delete_item.id, delete_item.isComplete);
      });

      const changeButton = document.createElement("button");
      if (item.isComplete) {
        changeButton.innerText= '未完了へ変更';
      } else {
        changeButton.innerText= '完了へ変更';
      }
      changeButton.addEventListener('click', () => {
        const change_item = todos.find(change_item => change_item.id === item.id);
        changeItem(change_item.id);
      });

      div_item.appendChild(editButton);
      div_item.appendChild(deleteButton);
      div_item.appendChild(changeButton);
     }

    // ここでitem.isCompleteの値を確認し、適切なリストに追加する
    // && completeList もしくは incompleteListを書くことで。item.isComplete == undefindのパターンを回避できる
    if (item.isComplete && completeList) {
      completeList.appendChild(div_list);
    } else if (!item.isComplete && incompleteList) {
      incompleteList.appendChild(div_list);
    }
  });

  todos = data;
}



// POSTアクションのイベントハンドラ
function addItem() {
  const addNameTextbox = document.getElementById('add-name');
  const addDate = document.getElementById('add-date');

  // Dateオブジェクトへの変換を行う前にアラートを表示する
  if (addDate.value === '') {
    alert('日付を入力して下さい');
    return;
  }

  // Dateオブジェクトを生成し、そのDateオブジェクトをUTCに変更する
  const UTCDate = new Date(addDate.value);
  UTCDate.setUTCHours(0, 0, 0, 0);

  console.log(UTCDate);

  const item = {
    name: addNameTextbox.value,
    isComplete: false,
    date: UTCDate.toISOString()
  };

  if (item.name.trim() === '') {
    alert('TODOを入力して下さい');
    return;
  }

  if (item.name.length > 100) {
    alert('入力は100文字以内にして下さい');
    return;
  }

  fetch("https://localhost:7034/api/todoitems", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    // JSON文字列への変換
    body: JSON.stringify(item)
  })
    // リクエストが成功すると、下記でJSONオブジェクトを処理する
    .then(response => response.json())
    .then(() => {
      // HOMEへのリダイレクト
      window.location.href = 'index.html';
    })
    .catch(error => console.error('Unable to add item.', error));
}



// UPDATE(編集)アクションのイベントハンドラ

function editItem(id) {
  // 該当アイテムを取得
  const edit_item = todos.find(item => item.id === id);

  // URLパラメーターにデータを埋め込む
  const queryString = `?id=${edit_item.id}&name=${edit_item.name}&isComplete=${edit_item.isComplete}&date=${edit_item.date}`;

  // 編集フォームへのリダイレクト
  if (edit_item.isComplete) {
    window.location.href = 'complete_edit_text.html' + queryString;
  } else {
    window.location.href = 'incomplete_edit_text.html' + queryString;
  }
}

function edit_updateItem() {
  const editNameTextbox = document.getElementById('edit-name');
  const editDate = document.getElementById('edit-date');

  // Dateオブジェクトへの変換を行う前にアラートを表示する
  if (editDate.value === '') {
    alert('日付を入力して下さい');
    return;
  }

  const editUTCDate = new Date(editDate.value);
  editUTCDate.setUTCHours(0, 0, 0, 0);


  // URLパラメーターからデータを取得
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const isComplete = params.get('isComplete');

  const edit_updatedItem = {
    id: id,
    isComplete: JSON.parse(isComplete), // 文字列を解析し、それを対応するデータ型に変換する
    name: editNameTextbox.value,
    date: editUTCDate.toISOString()
  };

  if (edit_updatedItem.name.trim() === '') {
    alert('TODOを入力して下さい');
    return;
  }

  if (edit_updatedItem.name.length > 100) {
    alert('入力は100文字以内にして下さい');
    return;
  }

  fetch(`https://localhost:7034/api/todoitems/${edit_updatedItem.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(edit_updatedItem)
  })
    .then(() => {
      // 完了, 未完了ページへのリダイレクト
      if (JSON.parse(isComplete)) {
        window.location.href = 'complete.html';
      } else {
        window.location.href = 'incomplete.html';
      }
    })
    .catch(error => console.error('Unable to update item.', error));
}



// UPDATE(変更)メソッドのイベントハンドラ
function changeItem(id) {
  // 該当アイテムを取得
  const change_item = todos.find(item => item.id === id);

  // URLパラメーターにデータを埋め込む
  const queryString = `?id=${change_item.id}&name=${change_item.name}&isComplete=${change_item.isComplete}&date=${change_item.date}`;

  // 変更フォームへのリダイレクト
  if (change_item.isComplete) {
    window.location.href = 'complete_change_text.html' + queryString;
  } else {
    window.location.href = 'incomplete_change_text.html' + queryString;
  }
}

function change_updateItem() {
  const changeDate = document.getElementById('change-date');

  // Dateオブジェクトへの変換を行う前にアラートを表示する
  if (changeDate.value === '') {
    alert('日付を入力して下さい');
    return;
  }

  const changeUTCDate = new Date(changeDate.value);
  changeUTCDate.setUTCHours(0, 0, 0, 0);

  // URLパラメーターからデータを取得
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const isComplete = params.get('isComplete');
  const name = params.get('name');

  const change_updateItem = {
    id: id,
    isComplete: !JSON.parse(isComplete), // isCompleteの真偽値をトグルさせる
    name: name,
    date: changeUTCDate.toISOString()
  };

  fetch(`https://localhost:7034/api/todoitems/${change_updateItem.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(change_updateItem)
  })
    .then(() => {
      // 完了, 未完了ページへのリダイレクト
      if (JSON.parse(isComplete)) {
        window.location.href = 'incomplete.html';
      } else {
        window.location.href = 'complete.html';
      }
    })
    .catch(error => console.error('Unable to update item.', error));
}



// DELETEメソッドのイベントハンドラ

function deleteItem(id, isComplete) {
  fetch(`https://localhost:7034/api/todoitems/${id}`, {
    method: 'DELETE'
  })
  .then(() => {
    if (isComplete) {
      // 完了済みTODOの場合、完了ページにリダイレクトする
      window.location.href = 'complete.html';
    } else {
      window.location.href = 'incomplete.html';
    }
  })
  .catch(error => console.error('Unable to delete item', error));
}