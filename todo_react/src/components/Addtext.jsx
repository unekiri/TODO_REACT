import React from 'react';
import { Header} from './Header';
import { addItem } from './PostItem';
import { Form } from './Form';
import '../stylesheets/style.css';

export const Addtext = () => {
  const handleOnSubmit = () => {
    addItem();
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