import SideNavBar from "./components/SideNavBar/SideNavBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import { CssBaseline, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import OAuthCallback from "./components/OAuthCallback/OAuthCallback";
import Manage from "./pages/Manage/BudgetPage";
import styles from "./App.module.css"

function App() {
  return (
    <Router>
      <CssBaseline />
      <Box className="app-root">
        <Routes> 
          <Route path="/login" element={<Login />} />
          <Route path="/auth/callback" element={<OAuthCallback />} />
          <Route element={<ProtectedRoute />}>
            <Route
              element={
                <Box className={styles.appLayout}>
                  <SideNavBar />
                  <Box component="main" className={styles.mainContent}>
                    <Outlet />
                  </Box>
                </Box>
              }
            >
              <Route path="*" element={<Dashboard/>} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/manage-budget" element={<Manage />} />
            </Route>
          </Route>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
