import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Search() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Events" variant="outlined" />
      <TextField id="outlined-basic" label="No of members" type='number' variant="outlined" />
      <TextField
          required
          id="outlined-number"
          label="Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      
     
      <a href='whatwedo'>
      <Button variant="contained" color="success" style={{height:"70px", width:"120px"}}>
        Search
      </Button>
      </a>
    </Box>
  );
}