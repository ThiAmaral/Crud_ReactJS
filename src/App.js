import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/routes';

function App() {

  return (
    <Router>
      <div>
        <header>
          <div class='mt-4'>

          </div>
        </header>
        <body>
          <Routes />
        </body>
      </div>
    </Router>
    
  );
}

export default App;
