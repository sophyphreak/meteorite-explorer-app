import React from 'react';
import { Form, Input, Button } from 'reactstrap';

const FormStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1em'
};

const Search = props => (
  <Form
    onSubmit={e => {
      e.preventDefault();
    }}
    style={FormStyle}
    inline
  >
    <Input onChange={props.onChange} placeholder="enter search term" />
    <Button onClick={props.onClick}>Search</Button>
  </Form>
);

export default Search;
