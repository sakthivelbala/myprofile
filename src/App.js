import './App.css';
import { Box, Card, Grid2 } from '@mui/material';
import Header from './components/Header';
import LeftPane from './components/LeftPane';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteConstants from './utils/RouteConstants';

function App() {

  return <BrowserRouter>
    <Header />
    <Box sx={{ flexGrow: 1, marginTop: '8vh', height: '91vh' }}>
      <Grid2 container spacing={2} sx={{ height: '100%' }} columns={{ xs: 2, sm: 16 }}>
        <Grid2 size={2} >
          <Card variant="outlined" sx={{ height: '100%' }}>
            <LeftPane routes={RouteConstants} />
          </Card>
        </Grid2>
        <Grid2 size="grow">
          <Card variant="outlined" sx={{ height: '100%' }}>
            <Routes>
              {
                RouteConstants.map(e => 
                  <Route key={e.path} path={e.path} element={e.component()} />
                )
              }
            </Routes>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  </BrowserRouter>
}

export default App;
