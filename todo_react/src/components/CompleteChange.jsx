import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Header } from './Header';
import { Load } from './Load';
import { change_updateItem } from './Change_UpdateItem';
import '../stylesheets/style.css';

export const CompleteChange = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: {
      name: '',
      date: '',
    },
  });

  useEffect(() => {
    Load((httpData) => {
      const date = new Date(httpData.date);
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      // 元の日付をフォームに表示
      setValue('date', formattedDate);
    });
  }, [setValue]);
  
  const handleOnSubmit = () => {
    change_updateItem(true);
  }

  return (
    <>
    <Header />
    <main>
      <div className="container">
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="incomplete-area">
            <div className="another-page">
              <p>完了日</p>
              <input 
                id="date" type="date" 
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