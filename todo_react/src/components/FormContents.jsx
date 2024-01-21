import React from 'react';
import { useForm } from 'react-hook-form';
import { TitleStyle } from './View';

export const FormContents = () => {
  const { register, formState: { errors } } = useForm();

  return (
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
  );
};
