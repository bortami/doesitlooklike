import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className="main-container">
      <CardMedia
        component="img"
        height="340"
        width="215"
        image="/images/bill.jpeg"
        alt="bill"
      />
      <CardContent>
      <FormControl component="fieldset">
  <FormLabel component="legend">Does it look like? </FormLabel>
  <RadioGroup
    aria-label="what"
    name="radio-buttons-group"
  >
    <FormControlLabel value="Bill Cosby" control={<Radio />} label="Bill Cosby" />
    <FormControlLabel value="Miley Cyrus" control={<Radio />} label="Miley Cyrus" />
    <FormControlLabel value="Ants" control={<Radio />} label="Ants" />
  </RadioGroup>
</FormControl>
      </CardContent>
      <CardActions>
      <Stack spacing={2} direction="row">
      <Button variant="contained">Vote</Button>
      <Button variant="outlined">See Results</Button>
    </Stack>
      </CardActions>
    </Card>
  );
}



