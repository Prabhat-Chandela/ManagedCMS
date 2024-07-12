import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';

const Home = lazy(()=> import('./Pages/Home.jsx'));
const Services = lazy(()=> import('./Pages/Services.jsx'));

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/",
        element:<Home/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
