import React from 'react';

const ItemDetail = (props) =>  (
  <section className='item-detail'>
    <img src={`${props.item.url}`} />
    <h2>{props.item.name}</h2>
    <h2>{props.item.price}</h2>
  </section>
);

export default ItemDetail;
