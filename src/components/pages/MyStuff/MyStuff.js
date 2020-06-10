import React from 'react';
import './MyStuff.scss';

import ItemCard from '../../shared/ItemCard/ItemCard';
import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/itemData';

class MyStuff extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    const uid = authData.getUid();
    itemData.getItemsByUid(uid)
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('could not get Items', err));
  }

  componentDidMount() {
    this.getItems();
  }

  editEvent = (e) => {
    e.preventDefault();
    const stuffId = '12345';
    this.props.history.push(`/edit/${stuffId}`);
  }

  singleViewEvent = (e) => {
    e.preventDefault();
    const stuffId = '12345';
    this.props.history.push(`/singlestuff/${stuffId}`);
  }

  render() {
    const { items } = this.state;
    const buildItemCards = items.map((item) => (
        <ItemCard item={item}/>
    ));
    return (
      <div className="MyStuff">
      <h1>My Stuff</h1>
      <div className="d-flex flex-wrap">
          {buildItemCards}
        </div>
      </div>
    );
  }
}

export default MyStuff;
