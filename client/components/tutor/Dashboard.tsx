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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

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

const PaperItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    width: '100%',
    color: theme.palette.text.secondary,
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

const columns = [
    { id: 'name', label: 'ID', minWidth: 170 },
    { id: 'code', label: 'CÂU HỎI', minWidth: 100 },
    {
        id: 'population',
        label: 'NGƯỜI HỎI',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'size',
        label: 'THỂ LOẠI',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'density',
        label: 'ĐÁP ÁN',
        minWidth: 170,
        align: 'right',
    },
];

function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];

function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

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
                                <PaperItem>
                                    <Grid container spacing={3} sx={{ alignItems: 'center' }}>
                                        <Grid item xs={12} sm={9}>
                                            <Stack flexDirection={'row'} justifyContent={'flex-start'}>
                                                <Box>
                                                    <img src='/assets/images/placeholder-person.png' style={{ maxWidth: '50px' }} />
                                                </Box>
                                                <Box sx={{ marginLeft: '20px' }}>
                                                    <Stack flexDirection={'column'} justifyContent={'flex-start'}>
                                                        <Box>
                                                            <Stack flexDirection={'row'} flexWrap={'wrap'} alignItems={'center'}>
                                                                <Box>
                                                                    <Typography variant="body1" gutterBottom sx={{ fontWeight: 800 }}>pnt@gmail.com</Typography>
                                                                </Box>
                                                                <Box sx={{ marginLeft: '20px' }}>
                                                                    <Typography variant="body2" gutterBottom>ID người dùng: 1712222222</Typography>
                                                                </Box>
                                                            </Stack>
                                                        </Box>
                                                        <Box>
                                                            <Stack flexDirection={'row'} flexWrap={'wrap'} justifyContent={'start'}>
                                                                <Box>
                                                                    <Typography variant="body2" gutterBottom>Đăng nhập lần cuối: 12/12/2021</Typography>
                                                                </Box>
                                                                <Box sx={{ marginLeft: '20px' }}>
                                                                    <Typography variant="body2" gutterBottom>IP: 171.222.222</Typography>
                                                                </Box>
                                                            </Stack>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <Button variant="outlined">Xác thực tài khoản</Button>
                                        </Grid>
                                    </Grid>
                                </PaperItem>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3} sx={{ mt: '30px' }}>
                            <Grid item xs={12}>
                                <PaperItem>
                                    <Box sx={{marginTop: '30px', marginBottom: '20px'}}>
                                        <Typography variant="body2" gutterBottom sx={{textAlign: 'left', fontSize: '1.5em', color: 'blue', fontWeight: 700}}>BẢNG HOẠT ĐỘNG</Typography>
                                    </Box>
                                    <TableContainer sx={{ maxHeight: 440 }}>
                                        <Table stickyHeader aria-label="sticky table">
                                            <TableHead>
                                                <TableRow>
                                                    {columns.map((column) => (
                                                        <TableCell
                                                            sx={{ backgroundColor: 'aliceblue', fontWeight: 700 }}
                                                            key={column.id}
                                                            align={column.align}
                                                            style={{ minWidth: column.minWidth }}
                                                        >
                                                            {column.label}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows
                                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                    .map((row) => {
                                                        return (
                                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                                {columns.map((column) => {
                                                                    const value = row[column.id];
                                                                    return (
                                                                        <TableCell key={column.id} align={column.align}>
                                                                            {column.format && typeof value === 'number'
                                                                                ? column.format(value)
                                                                                : value}
                                                                        </TableCell>
                                                                    );
                                                                })}
                                                            </TableRow>
                                                        );
                                                    })}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <TablePagination
                                        rowsPerPageOptions={[10, 25, 100]}
                                        component="div"
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
                                </PaperItem>
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