import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Header } from './Header';
import { Load } from './Load';
import { FormContents } from './FormContents';
import { FormDate } from './FormDate';
import { FormButton } from './FormButton';
import { edit_updateItem } from './Edit_UpdateItem';
import '../stylesheets/style.css';

export const CompleteEdit = () => {
  const { handleSubmit, setValue } = useForm({
    defaultValues: {
      name: '',
      date: '',
    },
  });

  useEffect(() => {
    Load((httpData) => {
      const date = new Date(httpData.date);
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      // 元のTODO内容をフォームに表示
      setValue('name', httpData.name);
      // 元の日付をフォームに表示
      setValue('date', formattedDate);
    });
  }, [setValue]);
  
  const handleOnSubmit = () => {
    edit_updateItem(true);
  }

  return (
    <>
    <Header />
    <main>
      <div className="container">
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div className="area">
            <FormContents/>
            <FormDate title="完了日"/>
            <FormButton/>
          </div>
        </form>
      </div>
    </main>
    </>
  );
};