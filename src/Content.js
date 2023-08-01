/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import ItemList from './ItemList';

// eslint-disable-next-line react/prop-types
const Content = ({items,handleCheck, handleDelete}) => {
  return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <main>
        {items.length ? (
            <ItemList
                   items={items}
                   handleCheck={handleCheck}
                   handleDelete={handleDelete}
            />
          
        ) : (
          <p style={{ marginTop: '2rem'}}>Your list is empty.</p>
        )}  
      </main>
    );
  };

export default Content;

