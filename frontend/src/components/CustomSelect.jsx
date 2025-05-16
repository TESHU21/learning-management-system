import React from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/select'; // Update path based on your project structure

const CustomSelect = ({ field, options, placeholder }) => {
  return (
    <Select
      value={
        field.value === true
          ? 'true'
          : field.value === false
          ? 'false'
          : field.value?.toString() || ''
      }
      onValueChange={(value) => {
        let parsedValue;
        if (value === 'true') parsedValue = true;
        else if (value === 'false') parsedValue = false;
        else parsedValue = value;
        field.onChange(parsedValue);
      }}
    >
      <SelectTrigger className="h-[48px] px-3 py-4 w-full bg-[#F5F5F5]">
        <SelectValue placeholder={placeholder || 'Select'} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value.toString()} value={option.value.toString()}>
            {option.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
