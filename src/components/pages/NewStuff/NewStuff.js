import React from 'react';
import './NewStuff.scss';
import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/itemData';


class NewStuff extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  saveItem = (e) => {
    e.preventDefault();
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;
    const newItem = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };
    itemData.postItem(newItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('unable to save item:', err));
  }

  render() {
    return (
      <div className="NewScat col-12">
        <h1>New Item</h1>
        <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="scat-location">Name</label>
            <input
              type="text"
              className="form-control"
              id="item-name"
              value={this.state.itemName}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scat-color">Image</label>
            <input
              type="text"
              className="form-control"
              id="scat-color"
              value={this.state.itemImage}
              onChange={this.imageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="scat-shape">Description</label>
            <input
              type="text"
              className="form-control"
              id="scat-shape"
              value={this.state.itemDescription}
              onChange={this.descriptionChange}
            />
          </div>
          <button className="btn btn-primary" onClick={this.saveItem}>Save Item</button>
        </form>
      </div>
    );
  }
}

export default NewStuff;
