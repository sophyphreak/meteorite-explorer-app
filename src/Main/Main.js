import React, { Component } from 'react';
import Search from '../Search/Search';
import LandingsTable from '../LandingsTable/LandingsTable';
import getMeteoriteData from './getMeteoriteData';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    const { data } = await getMeteoriteData();
    this.setState(() => ({
      data
    }));
  }
  render() {
    return (
      <div>
        <Search />
        <br />
        <LandingsTable data={this.state.data} />
      </div>
    );
  }
}

export default Main;
