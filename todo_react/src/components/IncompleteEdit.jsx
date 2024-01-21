import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Header } from './Header';
import { Load } from './Load';
import { Form } from './Form';
import { edit_updateItem } from './Edit_UpdateItem';
import '../stylesheets/style.css';

export const IncompleteEdit = () => {
  const { setValue } = useForm({
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
    edit_updateItem(false);
  }


  return (
    <>
    <Header />
    <main>
      <div className="container">
        <Form onSubmit={handleOnSubmit} bkcolor="#c1ffe2"/>
      </div>
    </main>
    </>
  );
};