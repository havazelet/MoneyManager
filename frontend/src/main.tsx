import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProviderWrapper } from './ThemeContext';
import { StyledEngineProvider } from '@mui/material/styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </StyledEngineProvider>
  </StrictMode>
);
