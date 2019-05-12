import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

const Search = () => (
  <Form inline>
    <Input placeholder="enter search term" />
    <Button>Search</Button>
  </Form>
);

export default Search;
