// DELETEメソッドのイベントハンドラ
const uri = 'https://localhost:7034/api/todoitems';

export const deleteItem = (id, isComplete) => {
    fetch(`${uri}/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // 削除が成功した場合の処理
        if (isComplete) {
            // 削除したTODOが完了済みだった場合、完了ページにリダイレクトする
            window.location.href = '/complete';
        } else {
            window.location.href = '/incomplete';
        }
    })
    .catch(error => console.error('Unable to delete item.', error));
};

    