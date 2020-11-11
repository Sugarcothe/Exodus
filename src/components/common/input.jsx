import React from 'react';

export const Input = ({ name, placeholder, value, onChange}) => {
  return (
    <div className="form-group col-md-6 p-2">
    <input type="text" 
    value={value}
    onChange={onChange}
    id={name}
    name={name}
    className="form-control" />
  </div>
  )
}

export default Input