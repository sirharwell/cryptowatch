import React, { Fragment } from 'react';
import Coinform from './CoinForm';
import CoinList from './CoinList';

class Home = () => (
  <Fragment>
    <CoinForm />
    <CoinList />
  </Fragment>
)

export default Home;
