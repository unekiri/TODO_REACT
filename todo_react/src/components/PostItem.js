// POSTアクションのイベントハンドラ

export const addItem = () => {
  const addNameTextbox = document.getElementById('add-name');
  const addDate = document.getElementById('add-date');

  // Dateオブジェクトを生成し、そのDateオブジェクトをUTCに変更する
  const UTCDate = new Date(addDate.value);
  UTCDate.setUTCHours(0, 0, 0, 0);

  console.log(UTCDate);

  const item = {
    name: addNameTextbox.value,
    isComplete: false,
    date: UTCDate.toISOString()
  };

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
      window.location.href = '/';
    })
    .catch(error => console.error('Unable to add item.', error));
}