import React from 'react';
import Card from './Card';

const CardList = ({ monsts }) => {
  return (
    <div>
      {
        monsts.map((user, i) => {
          return (
            <Card
              key={i}
              id={monsts[i].id}
              name={monsts[i].name}
              email={monsts[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;