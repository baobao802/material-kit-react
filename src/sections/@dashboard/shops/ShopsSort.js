import PropTypes from 'prop-types';
// material
import { MenuItem, TextField } from '@mui/material';

// ----------------------------------------------------------------------

ShopsSort.propTypes = {
  options: PropTypes.array,
  onSort: PropTypes.func
};

export default function ShopsSort({ options, onSort }) {
  return (
    <TextField select size="small" value="latest" onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
