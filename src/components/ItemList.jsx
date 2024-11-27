import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ItemList = ({ items }) => {
  return (
    <ListGroup>
      {items.map((item) => (
        <ListGroup.Item key={item.id}>
          {item.id}: {item.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ItemList;
