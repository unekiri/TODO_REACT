import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Header } from './Header';
import { Load } from './Load';
import { edit_updateItem } from './Edit_UpdateItem';
import { Form } from './Form';
import '../stylesheets/style.css';

export const Incomplete_Edit = () => {
  const { setValue } = useForm();

  useEffect(() => {
    Load((httpData) => {
      const date = new Date(httpData.date);
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      // 元のTODO内容をフォームに表示
      setValue('name', httpData.name);
      // 元の日付をフォームに表示
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
        <Form onSubmit={handleOnSubmit} />
      </div>
    </main>
    </>
  );
};