// GETアクションのイベントハンドラ

let todos = [];

export const getItems = (showButtons) => {
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

export const _displayItems = (data, showButtons) => {
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
}