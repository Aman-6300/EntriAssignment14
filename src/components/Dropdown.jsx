import React from 'react';
import { Form } from 'react-bootstrap';

const Dropdown = ({ dataType, setDataType }) => {
  const handleSelectChange = (e) => {
    setDataType(e.target.value);
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>Select data type</Form.Label>
      <Form.Select value={dataType} onChange={handleSelectChange}>
        <option value="character">Characters</option>
        <option value="episode">Episodes</option>
        <option value="location">Locations</option>
      </Form.Select>
    </Form.Group>
  );
};

export default Dropdown;
