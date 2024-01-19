import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header} from './Header';
import { IncompleteComponents } from './IncompleteComponent';
import { getItems } from './GetItems'; 
import '../stylesheets/style.css';

export const Incomplete = () => {
  useEffect(() => {
    getItems(true);
  }, []);
  return (
    <>
      <Header />
      <main>
        <div className="add_text">
          <Link to="/addtext">TODOを追加する</Link>
        </div>
        <div className="container">
          <IncompleteComponents />
        </div>
      </main>
    </>
  );
};
