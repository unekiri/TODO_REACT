// DELETEメソッドのイベントハンドラ

const uri = 'https://localhost:7034/api/todoitems';

export const deleteItem = (id, isComplete) => {
    fetch(`${uri}/${id}`, {
      method: 'DELETE'
    })
    .catch(error => console.error('Unable to get items.', error));
    
    if (isComplete) {
      // 削除したTODOが完了済みだった場合、完了ページにリダイレクトする
      window.location.href = '/complete';
    } else {
      window.location.href = '/incomplete';
    }
}