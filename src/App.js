import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { SwitchRoutes } from './routes/switch';
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SwitchRoutes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
