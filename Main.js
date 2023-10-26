import React from 'react';
import ReactDOM from "react-dom/client"
import Header from './Header';
import Add1 from './Add1';
import Add2 from './Add2';
import CreateAdd from './CreateAdd';
import Submitted from './Submitted';
import AddInsight from './AddInsight';
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";


const AppLayout = () => {
    return (
        <div className="main">
            <Header />
            <Outlet/>
             </div>
    );
};
const appRouter = createBrowserRouter([
    {
      path: "/", // show path for routing
      element: <AppLayout />, // show component for particular path
      children: [
        // show children component for routing
      
        {
          path: "/create",
          element: <CreateAdd/>,
        },
       {
          path: "/create-add/text",
          element: <Add1 />,
        },
        {
            path: "/create-add/img",
            element: <Add2 />,
          },
          {
            path: "/submitted",
            element: <Submitted />,
          },
          {
            path: "/dashboard",
            element: <AddInsight />,
          },
        ],
    },
      ]  
  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);