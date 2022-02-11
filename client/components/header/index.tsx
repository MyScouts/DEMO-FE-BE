import React from 'react';
import styles from './header.module.scss';
import Image from 'next/image'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
})


export default function Header() {
    const classes = useStyles();

    return (
        <>
            <header
                className={`${styles.header}`}
            >
                <div className="container">
                    <div className={styles.item1} style={{ width: '100%', justifyContent: 'space-between' }}>
                        <Link href="/">
                            <a className={styles.logo}>
                                <Image
                                    width="70px"
                                    height="32px"
                                    src="/static/images/logo.png" alt="logo" />
                            </a>
                        </Link >
                        <div className="search-container">

                        </div>
                        <div style={{ marginRight: '60px' }}>
                            <Stack flexDirection={'row'} flexWrap={'nowrap'}>
                                <Box>
                                    <Button variant="outlined" sx={{
                                        background: '#FFFFFF',
                                        border: '2px solid #2962F5',
                                        boxSizing: 'border-box',
                                        boxShadow: '0px 4px 4px rgba(41, 98, 245, 0.25)',
                                        borderRadius: '14px',
                                    }}>
                                        <Link href="/signup" sx={{textDecoration: 'none', color: 'black'}}>Đăng kí</Link>
                                    </Button>
                                </Box>
                                <Box >
                                    <Button variant="contained" sx={{
                                        marginLeft: '7px',
                                        background: '#2962F5',
                                        border: '2px solid #7AADF9',
                                        boxSizing: 'border-box',
                                        boxShadow: '0px 4px 4px rgba(41, 98, 245, 0.25)',
                                        borderRadius: '14px',
                                    }}>
                                        <Link href="/login" sx={{textDecoration: 'none', color: 'white'}}>Đăng nhập</Link>
                                    </Button>
                                </Box>
                            </Stack>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}