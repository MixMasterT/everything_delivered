import React from 'react';
import ListItem from '../list_item/list_item';
import { Link } from 'react-router-dom';

class List extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <ul className='list'>
        {this.props.items.map((item, idx) => <ListItem item={item} key={item.id}/>)}
      </ul>
    )
  }
}
export default List;
