import React, { Component } from 'react';
import Search from '../Search/Search';
import LandingsTable from '../LandingsTable/LandingsTable';
import getMeteoriteData from './getMeteoriteData';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filtered: [],
      searchTerm: ''
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  async componentDidMount() {
    const { data } = await getMeteoriteData();
    const filtered = data;
    this.setState(() => ({
      data,
      filtered
    }));
  }
  onChange(e) {
    const searchTerm = e.target.value;
    this.setState(() => ({ searchTerm }));
  }
  onClick(e) {
    e.preventDefault();
    const filtered = this.state.data.filter(meteoriteData =>
      meteoriteData.name
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase())
    );
    this.setState(() => ({
      filtered
    }));
  }
  render() {
    return (
      <div>
        <Search onClick={this.onClick} onChange={this.onChange} />
        <br />
        <LandingsTable data={this.state.filtered} />
      </div>
    );
  }
}

export default Main;
