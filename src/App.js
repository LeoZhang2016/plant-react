import React from 'react';
import './App.css';
import Header from './Header';
import ListPlant from './ListPlant';
import AddPlant from './AddPlant';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
            <Header/>
          <Switch>
            <Route path='/' exact component={ListPlant}/>
            <Route path="/list" component={ListPlant}/>
            <Route path="/add" component={AddPlant}/>
            <Route path="*" component={ListPlant}/>
            </Switch>
        </div>
    </Router>
    
  );
}

const Home = () => {
    return (
      <div>
      <h1>Home Page</h1>
    </div>
    );
}

export default App;
