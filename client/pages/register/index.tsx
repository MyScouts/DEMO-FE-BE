import { Alert, AlertTitle, Box, Button, Collapse, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Snackbar, SnackbarContent, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
import { RegisterService } from "../../reponsitory/AuthService";
import { useRouter } from "next/router";
import styles from './register.module.scss'
import { alterFail, alterSuccess } from "../../reponsitory/AltertService";

const ValidationOutlineInput = styled(OutlinedInput)({
    '& input:valid ~ fieldset': {
        borderColor: '#0277bd',
        borderWidth: 1,
    },
    '& input:invalid ~ fieldset': {
        borderColor: '#424242',
        borderWidth: 1,
    },
    '& input:valid:focus ~ fieldset': {
        borderLeftWidth: 6,
        padding: '4px !important', // override inline-style
    },
});

const Register = () => {
    const router = useRouter();
    const [pageState, setPageState] = useState({
        showPassword: false,
        showConfirmPassword: false,
        errorOpen: false,
        error: ""
    });

    const [infoUser, setInfoUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
    });

    const handleValue = (event: any, attribute: string) => {
        setInfoUser({ ...infoUser, [attribute]: event.target.value });
    }

    const handleClickShowPassword = (event: any) => {
        setPageState({ ...pageState, showPassword: true });
    }

    const handleMouseDownPassword = (event: any) => {
        setPageState({ ...pageState, showPassword: false });
    }

    const handleClickShowConfirmPassword = (event: any) => {
        setPageState({ ...pageState, showConfirmPassword: true });
    }

    const handleMouseDownConfirmPassword = (event: any) => {
        setPageState({ ...pageState, showConfirmPassword: false });
    }

    const handleSubmitForm = async (event: any) => {
        event.preventDefault();
        if (infoUser.password !== infoUser.confirmPassword) {
            setPageState({ ...pageState, errorOpen: true, error: "Password don't match" })
        }

        const result = await RegisterService({
            firstName: infoUser.firstName,
            lastName: infoUser.lastName,
            email: infoUser.email,
            password: infoUser.password,
            phoneNumber: infoUser.phone
        })

        if (result === 200) {
            alterSuccess("Đăng ký thành công")
            router.push("/home")
            return
        } else if (result === 302) {
            alterFail("Số điện thoại đã được đăng ký")
            return
        } else {
            alterFail("Đăng ký thất bại")
            return
        };

    }
    return (
        <>
            <div className={`${styles.register}`}>
                <Box
                    className={`${styles.register__box}`}
                    component="form"
                    sx={{
                        width: '30%',
                        height: '60%',
                        borderRadius: 2,
                        backgroundColor: '#FFFFFF',
                        boxShadow: 3,
                        padding: '40px'
                    }}
                    onSubmit={handleSubmitForm}
                >
                    <Typography variant="h5" sx={{
                        color: '#0d47a1',
                        fontWeight: '500'
                    }}>
                        Registration Form
                    </Typography>

                    <Box sx={{
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <FormControl required sx={{
                            width: '49%',
                            marginTop: '20px'
                        }}>
                            <InputLabel htmlFor="outlined-adornment-first-name">First name</InputLabel>
                            <ValidationOutlineInput
                                required
                                id="outlined-adornment-first-name"
                                onChange={(e) => handleValue(e, "firstName")}
                                label="First name"
                            >
                            </ValidationOutlineInput>
                        </FormControl>
                        <FormControl required sx={{
                            width: '49%',
                            marginTop: '20px'
                        }}>
                            <InputLabel htmlFor="outlined-adornment-last-name">Last name</InputLabel>
                            <ValidationOutlineInput
                                required
                                id="outlined-adornment-last-name"
                                label="Last name"
                                onChange={(e) => handleValue(e, "lastName")}
                            >
                            </ValidationOutlineInput>
                        </FormControl>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <FormControl required sx={{
                            width: '49%',
                            marginTop: '20px'
                        }}>
                            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                            <ValidationOutlineInput
                                required
                                placeholder="example@gmail.com"
                                id="outlined-adornment-email"
                                onChange={(e) => handleValue(e, "email")}
                                label="Email"
                            >
                            </ValidationOutlineInput>
                        </FormControl>
                        <FormControl required sx={{
                            width: '49%',
                            marginTop: '20px'
                        }}>
                            <InputLabel htmlFor="outlined-adornment-phone-number">Phone number</InputLabel>
                            <ValidationOutlineInput
                                required
                                id="outlined-adornment-phone-number"
                                label="Phone number"
                                onChange={(e) => handleValue(e, "phone")}
                            >
                            </ValidationOutlineInput>
                        </FormControl>
                    </Box>

                    <Box sx={{
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <FormControl required sx={{
                            width: '49%'
                        }}>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <ValidationOutlineInput
                                id="outlined-adornment-password"
                                required
                                type={pageState.showPassword ? 'text' : 'password'}
                                onChange={(e) => handleValue(e, "password")}
                                label="Password"
                                endAdornment={
                                    <InputAdornment position="end"
                                    >
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {pageState.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }

                            >

                            </ValidationOutlineInput>
                        </FormControl>
                        <FormControl required sx={{
                            width: '49%'
                        }}>
                            <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
                            <ValidationOutlineInput
                                id="outlined-adornment-confirm-password"
                                required
                                type={pageState.showConfirmPassword ? 'text' : 'password'}
                                onChange={(e) => handleValue(e, "confirmPassword")}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownConfirmPassword}
                                            edge="end"
                                        >
                                            {pageState.showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm Password"
                            >
                            </ValidationOutlineInput>
                        </FormControl>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        marginTop: '30px',
                        justifyContent: 'center',
                    }}>
                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                "&.MuiButton-contained": {
                                    backgroundImage: 'linear-gradient(#29b6f6,#4274F3)'
                                }
                            }}
                        >
                            Register
                        </Button>
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        <Collapse in={pageState.errorOpen}>
                            <Alert
                                severity="error"
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setPageState({ ...pageState, errorOpen: false });
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                {pageState.error}
                            </Alert>
                        </Collapse>
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Register;