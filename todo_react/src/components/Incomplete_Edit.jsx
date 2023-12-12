import React from 'react';
import { useForm } from 'react-hook-form';
import { Header } from './Header';
import { EditItem } from './EditItems';
import '../stylesheets/style.css';

export const Incomplete_Edit = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleOnSubmit = () => {
    EditItems();
  }

  return (
    <>
    <Header />
    <main>
      <div class="container">
        <form action="javascript:void(0);" method="put" onsubmit="edit_updateItem(false)">
          <div class="incomplete-area">
            <div class="another-page">
              <p>タスクの内容</p>
              <textarea id="edit-name" placeholder="100文字以内の入力"></textarea>
            </div>
            <div class="another-page">
              <p>完了予定日</p>
              <input id="edit-date" type="date">
            </div>
            <div class="end_button">
              <button type="submit">終了</button>
            </div>
          </div>
        </form>
      </div>
    </main>
    </>
  );
};

<script src="../config/index.js"></script>
<script type="text/javascript">
  load((httpData) => {
    const date = new Date(httpData.date);
        
    // 日付を"yyyy-MM-dd"形式にフォーマット
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

    // 元のTODO内容をフォームに表示
    document.getElementById('edit-name').value = httpData.name;
    // 元の日付をフォームに表示("/"で文字列を分割し、分割された文字列を"-"で繋ぐ)
    document.getElementById('edit-date').value = formattedDate.split("/").join("-");
  });
</script>