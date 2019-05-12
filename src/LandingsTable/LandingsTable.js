import React from 'react';
import { Table } from 'reactstrap';

const LandingsTable = () => (
  <Table striped responsive>
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
    <tbody />
  </Table>
);

export default LandingsTable;
