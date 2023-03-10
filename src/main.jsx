import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Products from './views/Products/Products';
import Pay from './views/Pay/Pay';
import { Products_mock } from './mock/products.mock';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",    
    element: <Home data={Products_mock} />,
  },
  {
    path: "/products/:productId",
    element: <Products data={Products_mock} />,
  },
  {
    path: "/pay/:payId",
    element: <Pay data={Products_mock} />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
