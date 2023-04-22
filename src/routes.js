import { Navigate, useRoutes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import DashboardLayout from './layout/DashboardLayout';
import SimpleLayout from './layout/SimpleLayout';



export default function Routes(){
    const routes = useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [
                {
                    element: <Navigate to="/dashboard/app" />,
                    index: true,
                },
                {
                    path: 'app',
                    element: <Dashboard />,
                },
                {
                    path: 'users',
                    element: <Dashboard />,
                },
            ],
        },
        {
            path:'/login',
            element:<SimpleLayout/>,
            children:[
                {
                    path:'',
                    element:<Login/>
                }
            ]
        }
    ]);

    
    return routes
}