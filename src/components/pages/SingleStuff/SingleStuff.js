import React from 'react';
import { Link } from 'react-router-dom';

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

  removeItem = () => {
    const itemId = this.props.match.params.stuffId;
    itemData.deleteItem(itemId)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('unable to delete item: ', err));
  }

  render() {
    const { item } = this.state;
    const itemId = this.props.match.params.stuffId;
    const editLink = `/edit/${itemId}`;
    return (
      <div className="SingleStuff">
      <h1>Single Stuff</h1>
      <div className="ItemCard col-12 mb-4">
        <div className="card">
        <img className="card-img-top" src={item.itemImage} alt="" />
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <p className="card-text">{item.itemDescription}</p>
            <Link className="btn btn-primary" to={editLink}>Edit</Link>
            <button className="btn btn-danger" onClick={() => this.removeItem(item.id)}>Delete</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default SingleStuff;
