import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/" component={Course} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
