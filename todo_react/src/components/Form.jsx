import React from 'react';
import { useForm } from 'react-hook-form';
import { BackStyle, TitleStyle } from './ViewComponent';

export const Form = ({ onSubmit, bkcolor }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const individualBackStyle = {
    ...BackStyle, //オブジェクトの展開
    backgroundColor: bkcolor, //プロパティの追加
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="area" style={individualBackStyle}>
        <div className="another-page">
          <p style={TitleStyle}>タスクの内容</p>
          <textarea 
            id="name" placeholder="100文字以内の入力"
            {...register('name', {
              required: '入力必須です。', 
              maxLength : {value: 100, message: '100文字以内で入力して下さい。'}
            })}
          />
          {errors.name && <span className="error-message">{errors.name.message}</span>}
        </div>
        <div className="another-page">
          <p style={TitleStyle}>完了予定日</p>
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
  );
};
