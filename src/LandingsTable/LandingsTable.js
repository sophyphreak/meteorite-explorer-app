import React from 'react';
import { Table } from 'reactstrap';
import LandingRow from './LandingRow/LandingRow';

const TableStyle = {
  marginLeft: '2em',
  marginRight: '2em'
};

const LandingsTable = ({ data }) => {
  return (
    <Table style={TableStyle} striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Id</th>
          <th>Name Type</th>
          <th>Rec Class</th>
          <th>Mass (g)</th>
          <th>Fall</th>
          <th>Year</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
        {data.map((meteoriteData, index) => (
          <LandingRow data={meteoriteData} key={index} />
        ))}
      </tbody>
    </Table>
  );
};

export default LandingsTable;
