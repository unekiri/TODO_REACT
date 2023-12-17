// GETアクションのイベントハンドラ(指定したIDのデータのみを取得する)

const uri = 'https://localhost:7034/api/todoitems';

export const getSelectItem = async(id) => {
  return await fetch(`${uri}/${id}`, {
    method: 'GET',
  })
}