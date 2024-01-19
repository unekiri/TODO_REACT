import React, { useEffect } from 'react';
import { Header} from './Header';
import { CompleteComponents } from './CompleteComponents';
import { getItems } from './GetItems'; 
import '../stylesheets/style.css';

export const Complete = () => {
  useEffect(() => {
    getItems(true);
  }, []);
  return (
    <>
    <Header />
    <main>
      <div className="container">
        <CompleteComponents />
      </div>
    </main>
    </>
  );
};