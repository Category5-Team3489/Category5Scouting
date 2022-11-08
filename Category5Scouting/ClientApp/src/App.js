import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Settings } from './components/Settings';
import { UsefulLinks } from './components/UsefulLinks';
import { Scout } from './components/Scout';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/settings' component={Settings} />
        <Route path='/useful-links' component={UsefulLinks} />
        <Route path='/scout' component={Scout} />
      </Layout>
    );
  }
}
