import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UserProvider } from './pages/User'
import { StyledEngineProvider } from '@mui/material/styles'

const theme = createTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <QueryClientProvider client={new QueryClient()}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    </UserProvider>
  </StrictMode>
)
