import Actions from "../views/Actions";
import DashboardOutlined from '@mui/icons-material/DashboardOutlined';
import PersonOutline from '@mui/icons-material/PersonOutline';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import CloudQueueOutlined from '@mui/icons-material/CloudQueueOutlined';
import Dashboard from "../views/Dashboard";
import Volunteers from "../views/Volunteers";
import FeaturePage from "../views/FeaturePage";

export const navigationData = [
  { 
    displayName: 'Dashboard', 
    path: '/', 
    element: <Dashboard />, 
    icon: <DashboardOutlined />
  },
  { 
    displayName: 'Actions', 
    path: 'Actions', 
    element: <Actions />,
    icon: <HomeOutlined />
  },
  { 
    displayName: 'Volunteers', 
    path: 'Volunteers', 
    element: <Volunteers />, 
    icon: <PersonOutline />
  },
  { 
    displayName: 'Notifications', 
    path: 'empty-page', 
    element: <FeaturePage />, 
    icon: <CloudQueueOutlined />
  },
];