import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ item }) => {
  let {id, url, name, price} = item;
  return (
    <li className='list-item'>
      <Link to={`items/${id}`} >
        <img src={url} />
      </Link>
      <h3>{name}</h3>
      <h3>{price}</h3>
    </li>
  );
  };

export default ListItem;
