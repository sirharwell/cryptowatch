import React from 'react';
import { Grid, Card, Header } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setHeaders } from '../actions/headers';

class Coin extends React.Component {
  state = { coin: {} }

  componentDidMount() {
    const {
      dispatch,
      match: { params: { id }}
    } = this.props;
    axios.get(`/api/coins/${id}`)
      .then(({ data, headers }) => {
        dispatch(setHeaders(headers))
        this.setState({ coin: data })
      })
  }

}

export default connect() (Coin)
