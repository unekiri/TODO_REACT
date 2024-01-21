import React from 'react';
import { useForm } from 'react-hook-form';
import { BackStyle } from './View';
import { FormContents } from './FormContents';
import { FormDate } from './FormDate';
import { FormButton } from './FormButton';

export const Form = ({ onSubmit, bkcolor }) => {
  const { handleSubmit } = useForm();
  const individualBackStyle = {
    ...BackStyle, //オブジェクトの展開
    backgroundColor: bkcolor, //プロパティの追加
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="area" style={individualBackStyle}>
        <FormContents/>
        <FormDate/>
        <FormButton/>
      </div>
    </form>
  );
};
