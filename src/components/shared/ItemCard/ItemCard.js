import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ItemCard.scss';

import itemShape from '../../../helpers/propz/itemShape';

class ItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    removeItem: PropTypes.func.isRequired,
  }

  render() {
    const { item, removeItem } = this.props;
    const singleLink = `/singlestuff/${item.id}`;
    const editLink = `/edit/${item.id}`;
    return (
      <div className="ItemCard col-3 mb-4">
        <div className="card">
        <img className="card-img-top" src={item.itemImage} alt="" />
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">{item.itemDescription}</p>
            <Link className="btn btn-primary" to={editLink}>Edit</Link>
            <Link className="btn btn-dark" to={singleLink}>Single View</Link>
            <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}


export default ItemCard;
