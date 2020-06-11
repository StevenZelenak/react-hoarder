import React from 'react';
import './SingleStuff.scss';
import itemData from '../../../helpers/data/itemData';

class SingleStuff extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const itemId = this.props.match.params.stuffId;
    itemData.getSingleItem(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('could not get single item', err));
  }

  render() {
    const { item } = this.state;
    return (
      <div className="SingleStuff">
      <h1>Single Stuff</h1>
      <div className="ItemCard col-12 mb-4">
        <div className="card">
        <img className="card-img-top" src={item.itemImage} alt="" />
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">{item.itemDescription}</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default SingleStuff;
