import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/dashboard';
import TransactionDetail from './components/transaction/TransactionDetail';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/transaction/:id' element={TransactionDetail} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Register} />
        </Switch>
        {/* <Header /> */} 
      </div>
    </BrowserRouter>
  );
}

export default App;
