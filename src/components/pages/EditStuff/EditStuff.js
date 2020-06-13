import React from 'react';
import './EditStuff.scss';
import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/itemData';


class EditStuff extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  componentDidMount() {
    const itemId = this.props.match.params.stuffId;
    itemData.getSingleItem(itemId)
      .then((response) => {
        const item = response.data;
        this.setState({
          itemName: item.itemName,
          itemImage: item.itemImage,
          itemDescription: item.itemDescription,
        });
      })
      .catch((err) => console.error('unable to get item to edit: ', err));
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

  updateItem = (e) => {
    e.preventDefault();
    const itemId = this.props.match.params.stuffId;
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;
    const updatedItem = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };
    itemData.putItem(itemId, updatedItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((err) => console.error('unable to save item:', err));
  }

  render() {
    return (
      <div className="EditStuff col-12">
        <h1>Edit</h1>
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
          <button className="btn btn-primary" onClick={this.updateItem}>Save Item</button>
        </form>
      </div>
    );
  }
}

export default EditStuff;
