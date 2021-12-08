import './App.css';
import * as React from 'react';
import MediaCard from './components/card';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100vw" sx={{ bgcolor: '#cfe8fc', height: '100vh' }} className="outer-cont">
          <MediaCard />
      </Container>
    </React.Fragment>
  );
}

export default App;
