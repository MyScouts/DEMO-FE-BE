import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Thông tin" />
        </ListItem>

        <ListItem button sx={{color: 'blue'}}>
            <ListItemIcon>
                <MenuBookIcon sx={{color: 'blue'}}/>
            </ListItemIcon>
            <ListItemText primary="Hoạt động" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <PointOfSaleIcon />
            </ListItemIcon>
            <ListItemText primary="Thanh toán" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Cài đặt" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Đăng xuất" />
        </ListItem>
    </div>
);