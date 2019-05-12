import React from 'react';
import moment from 'moment';

const LandingRow = ({ data }) => {
  const { name, id, nametype, recclass, mass, fall, year, geolocation } = data;
  let latitude, longitude;
  if (geolocation) {
    ({ latitude, longitude } = geolocation);
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{id}</td>
      <td>{nametype}</td>
      <td>{recclass}</td>
      <td>{mass}</td>
      <td>{fall}</td>
      <td>{moment(year).format('YYYY')}</td>
      <td>{latitude}</td>
      <td>{longitude}</td>
    </tr>
  );
};

export default LandingRow;
