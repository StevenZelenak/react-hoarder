import React from 'react';
import './MyStuff.scss';

class MyStuff extends React.Component {
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
    return (
      <div className="MyStuff">
      <h1>My Stuff</h1>
      <button className="btn btn-primary" onClick={this.editEvent}>Edit</button>
      <button className="btn btn-dark" onClick={this.singleViewEvent}>Single View</button>
      </div>
    );
  }
}

export default MyStuff;
