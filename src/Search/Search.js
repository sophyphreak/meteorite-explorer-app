import React from 'react';
import { Form, Input, Button } from 'reactstrap';

const FormStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1em'
};

const Search = () => (
  <Form style={FormStyle} inline>
    <Input placeholder="enter search term" />
    <Button>Search</Button>
  </Form>
);

export default Search;
