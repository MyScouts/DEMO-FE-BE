import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Thông tin nổi bật" />
        </ListItem>

        <ListItem button >
            <ListItemIcon>
                <MenuBookIcon/>
            </ListItemIcon>
            <ListItemText primary="Bài tập và trả lời" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <PointOfSaleIcon />
            </ListItemIcon>
            <ListItemText primary="Flashcard" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Cài đặt" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Điểm số" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Nhóm" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Bạn bè" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                < LocalLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Thư viện" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                < LocalAtmIcon />
            </ListItemIcon>
            <ListItemText primary="Ngân sách" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Đăng xuất" />
        </ListItem>
    </div>
);