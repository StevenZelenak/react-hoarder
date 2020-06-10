import React from 'react';

import './ItemCard.scss';

class ItemCard extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="ItemCard col-3 mb-4">
        <div className="card">
        <img className="card-img-top" src={item.itemImage} alt="" />
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">{item.itemDescription}</p>
            <button className="btn btn-primary" onClick={this.editEvent}>Edit</button>
            <button className="btn btn-dark" onClick={this.singleViewEvent}>Single View</button>
          </div>
        </div>
      </div>
    );
  }
}


export default ItemCard;
