import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { GlobalProvider } from './context/GlobalState';
import Dashboard from './components/dashboard/dashboard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "/",
    //     element: <Dashboard />
    //   },
    // ]
  }
]);

function App() {
  return (
    <GlobalProvider>
      <RouterProvider router={router}>
        <div className="App"> 
          <Navbar />
          {/* <Header /> */} 
        </div>
      </RouterProvider>
    </GlobalProvider>
  );
}

export default App;
