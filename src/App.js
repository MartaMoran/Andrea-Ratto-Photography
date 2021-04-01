import { Link, Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme/index';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Paper style={{ width: '1240px', height: '1240px' }}>
          <h1>hola</h1>
          <Link href='#' color='textSecondary'>
            Link
          </Link>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default App;
