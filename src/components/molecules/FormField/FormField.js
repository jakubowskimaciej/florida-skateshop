import React from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';

const FormField = ({ label, name, id, type, ...props }) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={id}
        required
        autoComplete="off"
        {...props}
      />
    </>
  );
};

export default FormField;
