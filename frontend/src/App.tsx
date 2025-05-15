import './App.css';
import SideNavBar from './components/SideNavBar/SideNavBar';
import Dashboard from './pages/Dashboard/Dashboard';
import { Box, CssBaseline } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideNavBar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          padding: { xs: 1, sm: 2 },
          marginLeft: { xs: 0, sm: 0 }
        }}
      >
        <Dashboard />
      </Box>
    </Box>
  );
}

export default App;