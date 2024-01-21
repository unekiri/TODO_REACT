import React from 'react';
import { useForm } from 'react-hook-form';
import { TitleStyle } from './View';

export const FormDate = ({ title }) => {
  const { register, formState: { errors } } = useForm();

  return (
      <div className="another-page">
        <p style={TitleStyle}>{title}</p>
        <input 
          id="date" type="date" 
          {...register('date', { 
              required: '入力必須です。' }
          )}
        />
        {errors.date && <span className="error-message">{errors.date.message}</span>}
      </div>
  );
};
