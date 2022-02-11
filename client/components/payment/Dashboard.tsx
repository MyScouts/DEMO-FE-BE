import * as React from 'react';
import { styled, createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { mainListItems } from './listItems';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        border: '1px solid gray',
        borderRadius: '10px',
        color: 'gray',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function DashboardContent() {
    const [open, setOpen] = React.useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open} sx={{ background: 'white' }}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon sx={{ color: 'blue' }} />
                        </IconButton>
                        <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ width: '100%' }}>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{
                                    ['@media (max-width: 600px)']: {
                                        width: '70%',
                                    }
                                }}
                            >
                                <img src="/assets/images/AAA.png" />
                            </Typography>

                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon sx={{ color: 'blue' }} />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Tìm câu hỏi"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <Stack flexDirection={'row'}>
                                <IconButton color="inherit">
                                    <Badge color="secondary">
                                        <NotificationsIcon sx={{ color: 'blue' }} />
                                    </Badge>
                                </IconButton>

                                <IconButton color="inherit">
                                    <Badge color="secondary">
                                        <AccountCircle sx={{ color: 'blue' }} />
                                    </Badge>
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List>{mainListItems}</List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container sx={{ mt: 4, mb: 4, maxWidth: '3000px !important' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'}>
                                    <Box>
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            aria-label="open drawer"
                                            sx={{
                                                fontSize: '1.1em',
                                                '&:hover': {
                                                    backgroundColor: 'transparent'
                                                }
                                            }}
                                        >
                                            <MenuIcon sx={{ marginRight: '10px' }} />
                                            Lịch sử tích luỹ xu

                                        </IconButton>
                                    </Box>

                                    <Box>
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            aria-label="open drawer"
                                            sx={{
                                                fontSize: '1.1em',
                                                '&:hover': {
                                                    backgroundColor: 'transparent'
                                                }
                                            }}
                                        >
                                            <MenuIcon sx={{ marginRight: '10px' }} />
                                            Lịch sử chuyển nhận xu

                                        </IconButton>
                                    </Box>

                                    <Box>
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            aria-label="open drawer"
                                            sx={{
                                                fontSize: '1.1em',
                                                '&:hover': {
                                                    backgroundColor: 'transparent'
                                                }
                                            }}
                                        >
                                            <MenuIcon sx={{ marginRight: '10px' }} />
                                            Lịch sử coin

                                        </IconButton>
                                    </Box>

                                    <Box>
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            aria-label="open drawer"
                                            sx={{
                                                fontSize: '1.1em',
                                                '&:hover': {
                                                    backgroundColor: 'transparent'
                                                }
                                            }}
                                        >
                                            <MenuIcon sx={{ marginRight: '10px' }} />
                                            Lịch sử quà tặng

                                        </IconButton>
                                    </Box>

                                </Stack>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3} sx={{ mt: '10px' }}>
                            <Grid item xs={12}>
                                <Typography variant="body2" gutterBottom sx={{ textAlign: 'left', fontSize: '1.5em', color: 'gray', fontWeight: 700 }}>NGÂN SÁCH</Typography>

                                <Stack flexDirection={'row'} justifyContent={'space-around'}>
                                    <Stack>
                                        <Box>
                                            <Stack flexDirection={'row'} justifyContent={'flex-start'}>
                                                <p style={{ color: 'gray', fontWeight: 900, fontSize: '1.3em' }}>XU: </p>
                                                <MonetizationOnIcon sx={{ color: 'coral', marginLeft: '20px' }} />
                                                <p style={{ color: 'gray', fontWeight: 900, fontSize: '1.3em', marginLeft: '10px' }}> 100</p>
                                            </Stack>
                                        </Box>
                                        <Box sx={{ marginTop: '30px' }}>
                                            <Stack flexDirection={'row'} justifyContent={'flex-start'}>
                                                <p style={{ color: 'gray', fontWeight: 900, fontSize: '1.3em' }}>COIN: </p>
                                                <MonetizationOnIcon sx={{ color: 'coral', marginLeft: '20px' }} />
                                                <p style={{ color: 'gray', fontWeight: 900, fontSize: '1.3em', marginLeft: '10px' }}>100</p>
                                            </Stack>
                                        </Box>
                                    </Stack>
                                    <IconButton
                                        edge="start"
                                        color="inherit"
                                        aria-label="open drawer"
                                        sx={{
                                            fontSize: '1.1em',
                                            '&:hover': {
                                                backgroundColor: 'transparent'
                                            },
                                            color: 'blue'
                                        }}
                                    >
                                        <CleanHandsIcon sx={{ marginRight: '10px' }} />
                                        <p style={{ textDecoration: 'underline' }}>NẠP NGAY</p>

                                    </IconButton>
                                </Stack>

                            </Grid>
                        </Grid>

                        <Grid container spacing={3} sx={{ mt: '10px' }}>
                            <Grid item xs={12}>
                                <Typography variant="body2" gutterBottom sx={{ textAlign: 'left', fontSize: '1.1em', color: 'gray', fontWeight: 700 }}>
                                    CHUYỂN ĐỔI SỐ DƯ: 100 xu = 1 coin
                                </Typography>
                                <Stack flexDirection={'row'} sx={{ marginTop: '20px' }} alignItems={'center'} flexWrap={'wrap'}>
                                    <input placeholder='XU' style={{height: '40px'}}/>
                                    <ArrowRightIcon />
                                    <input placeholder='COIN' style={{height: '40px'}}/>
                                    <Box sx={{marginLeft: '20px'}}>
                                        <Button variant="contained">Chuyển đổi</Button>
                                    </Box>
                                </Stack>

                                <Stack flexDirection={'row'} sx={{ marginTop: '20px' }} alignItems={'center'} flexWrap={'wrap'}>
                                    <input placeholder='COIN' style={{height: '40px'}}/>
                                    <ArrowRightIcon />
                                    <input placeholder='XU' style={{height: '40px'}}/>
                                    <Box sx={{marginLeft: '20px'}}>
                                        <Button variant="contained">Chuyển đổi</Button>
                                    </Box>
                                </Stack>

                            </Grid>
                        </Grid>

                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}