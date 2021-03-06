import React from 'react';
import { hashHistory } from 'react-router';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(_id) {
    event.preventDefault();
    console.log(_id);
    console.log(Meteor.userId());
    Meteor.call('transfer', _id, true, Meteor.userId());
    Meteor.call("getWallet", Meteor.userId(), function(error, result) {

      Session.set('wallet', result);

    });
    hashHistory.push('/transaction');
  }

  render() {
    const { name, amount, message, _id } = this.props;
    return (
      <div className="marketplace-tile">
        <h3>{amount} BTC</h3>
        <h4>{name}</h4>
        <p>{message}</p>
        <button onClick={() => { this.handleSubmit(_id) }}>Accept</button>
      </div>
    );
  }
}
