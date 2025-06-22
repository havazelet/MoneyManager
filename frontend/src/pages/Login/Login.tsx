import {
  Box,
  Paper,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import { Apple, Google } from "@mui/icons-material";

import styles from "./Login.module.css";
import { APPLE_ID, GOOGLE_OAUTH } from "./Login.config";

const Login = () => {
  return (
      <Box className={styles.container}>
        <Paper elevation={4} className={styles.paper}>
          <Stack spacing={1} className={styles.headerStack}>
            <Typography variant="h4" component="h1" fontWeight={600}>
              Welcome back!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Enter your credentials to access your account
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <TextField label="Name" variant="outlined" fullWidth />
            <TextField label="Email address" type="email" variant="outlined" fullWidth />
            <TextField label="Password" type="password" variant="outlined" fullWidth />
          </Stack>

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember for 30 days" />
            <Button variant="text" size="small">
              Forgot password?
            </Button>
          </Stack>

          <Button variant="contained" size="large" fullWidth className={styles.loginButton}>
            Login
          </Button>

          <Divider className={styles.divider}>or</Divider>

          <Stack direction="row" spacing={2} className={styles.socialStack}>
            
          <IconButton
                color="primary"
                size="large"
                className={styles.iconButton}
                onClick={() => (window.location.href = GOOGLE_OAUTH)}
            >
                <Google />
            </IconButton>
            <IconButton
              color="primary"
              size="large"
              className={styles.iconButton}
              onClick={() => (window.location.href = APPLE_ID)}
            >
              <Apple />
            </IconButton>
          </Stack>

          <Typography variant="body2" className={styles.footerText}>
            Don’t have an account?
            <Button variant="text" size="small">
              Sign Up
            </Button>
          </Typography>
        </Paper>
      </Box>
  );
};

export default Login;