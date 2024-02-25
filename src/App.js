import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { GlobalProvider } from './context/GlobalState';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App"> 
          <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
          {/* <Header /> */} 
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
