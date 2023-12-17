import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Header } from './Header';
import { Load } from './Load';
import { edit_updateItem } from './Edit_UpdateItem';
import '../stylesheets/style.css';

export const Incomplete_Edit = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    Load((httpData) => {
      const date = new Date(httpData.date);
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

      // 元のTODO内容をフォームに表示
      setValue('name', httpData.name);
      // 元の日付ををフォームに表示
      setValue('date', formattedDate.split("/").join("-"));
    });
  }, [setValue]);

  const handleOnSubmit = () => {
    edit_updateItem(false);
  }

  return (
    <>
    <Header />
    <main>
    <div className="container">
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="incomplete-area">
          <div className="another-page">
            <p>タスクの内容</p>
            <textarea 
              id="add-name" placeholder="100文字以内の入力"
              {...register('name', {
                 required: '入力必須です。', 
                 maxLength : {value: 100, message: '100文字以内で入力して下さい。'}
              })}
            />
            {errors.name && <span className="error-message">{errors.name.message}</span>}
          </div>
          <div className="another-page">
            <p>完了予定日</p>
            <input 
              id="add-date" type="date" 
              {...register('date', { 
                  required: '入力必須です。' }
              )}
            />
            {errors.date && <span className="error-message">{errors.date.message}</span>}
          </div>
          <div className="end_button">
            <button type="submit">送信</button>
          </div>
        </div>
      </form>
    </div>
    </main>
    </>
  );
};