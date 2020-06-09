import React from 'react';
import './SingleStuff.scss';

class SingleStuff extends React.Component {
  render() {
    const { stuffId } = this.props.match.params;
    return (
      <div className="SingleStuff">
      <h1>Single Stuff</h1>
      <h2>The stuff id is {stuffId}</h2>
      </div>
    );
  }
}

export default SingleStuff;
