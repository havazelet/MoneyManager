import './App.css';
import SideNavBar from './components/SideNavBar/SideNavBar';
import Dashboard from './pages/Dashboard/Dashboard';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideNavBar />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Dashboard />
      </Box>
    </Box>
  );
}

export default App;
