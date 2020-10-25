import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shopping/shopping.component'
import LoginEtInscription from './pages/login-et-inscription/login-et-inscription.component'
import Header from './components/header/header.component';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
     <Route exact path='/' component={HomePage} />
     <Route path='/Shopping' component={ShopPage} />
     <Route path='/inscription' component={LoginEtInscription} />
      </Switch>


      
    </div>
  );
}

export default App;
