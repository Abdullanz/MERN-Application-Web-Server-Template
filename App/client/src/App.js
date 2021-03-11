import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Car from './components/car.js';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/car" component={Car} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
