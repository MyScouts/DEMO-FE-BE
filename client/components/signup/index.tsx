import React from "react";
import styles from './style.module.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useForm, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRouter } from 'next/router';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { loginService, RegisterService } from "../../reponsitory/AuthService";
import { alterFail, alterSuccess } from "../../reponsitory/AltertService";

type FormValues = {
    email: string;
    password: string;
    phoneNumber: string;
    lastName: string;
    firstName: string;
    birthDay: string;
    sex: string;
    address1: string;
    address2: string
};

const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
    phoneNumber: yup.string().required().matches(/^[0-9]{10}$/, "Phone number is invalid"),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    birthDay: yup.string().required(),
    sex: yup.string().required(),
    address1: yup.string().required(),
    address2: yup.string().required(),
}).required();


export default function SignupComponent({ }) {

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });
    const router = useRouter();

    const onSubmit = handleSubmit(async (data: any) => {
        const result = await RegisterService(data)
        if (result === 200) {
            alterSuccess("Đăng ký thành công")
            // router.push("/home")
            return
        } else if (result === 301) {
            alterFail("| Email đã tồn tại")
            return
        }
        else if (result === 302) {
            alterFail("Số điện thoại đã được đăng ký")
            return
        };
    });



    return (
        <form onSubmit={onSubmit}>
            <Box className={styles.root}>
                <Box className={styles.logo}>
                    <img src="/assets/images/AAA.png" />
                </Box>

                <Box className={styles.loginTextFrame}>
                    <Typography variant="body1" gutterBottom component="div" className={styles.loginText}>
                        Đăng kí tài khoản
                    </Typography>
                </Box>

                <Box className={styles.inputFrame}>
                    <Box style={{ width: '30%' }}>
                        <Typography gutterBottom component="div" className={styles.inputText}>
                            Email:
                        </Typography>
                    </Box>
                    <Box style={{ width: '70%' }}>
                        <input className={styles.input} {...register("email")} />
                        <p style={{
                            fontSize: "0.8rem",
                            color: "red",
                        }}>{errors.email?.message}</p>
                    </Box>
                </Box>



                <Box className={styles.infoFrame}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box style={{ width: '85%' }}>
                                <input className={styles.input} placeholder="Số điện thoại" {...register("phoneNumber")} />
                                <p style={{
                                    fontSize: "0.8rem",
                                    color: "red",
                                }}>{errors.phoneNumber?.message}</p>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box className={styles.infoFrame}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box style={{ width: '85%' }}>
                                <input className={styles.input} placeholder="Họ" {...register("firstName")} />
                                <p style={{
                                    fontSize: "0.8rem",
                                    color: "red",
                                }}>{errors.firstName?.message}</p>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box style={{ width: '85%' }}>
                                <input className={styles.input} placeholder="Tên" {...register("lastName")} />
                                <p style={{
                                    fontSize: "0.8rem",
                                    color: "red",
                                }}>{errors.lastName?.message}</p>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box style={{ width: '85%' }}>
                                <input className={styles.input} placeholder="Mật khẩu" {...register("password")} />
                                <p style={{
                                    fontSize: "0.8rem",
                                    color: "red",
                                }}>{errors.password?.message}</p>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box className={styles.inputFrame}>
                    <Box style={{ width: '30%' }}>
                        <Typography gutterBottom component="div" className={styles.inputText}>
                            Ngày sinh:
                        </Typography>
                    </Box>
                    <Box style={{ width: '70%' }}>
                        <input className={styles.input} type={'date'} {...register("birthDay")} />
                        <p style={{
                            fontSize: "0.8rem",
                            color: "red",
                        }}>{errors.birthDay?.message}</p>
                    </Box>
                </Box>

                <Box sx={{ width: '80%', marginLeft: '10%', marginTop: '50px' }}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Giới tính</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Nữ" {...register("sex")} />
                            <FormControlLabel value="male" control={<Radio />} label="Nam" {...register("sex")} />
                            <FormControlLabel value="other" control={<Radio checked />} label="Khác" {...register("sex")} />
                        </RadioGroup>
                    </FormControl>
                </Box>

                <Box className={styles.infoFrame}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box style={{ width: '85%' }}>
                                <input className={styles.input} placeholder="Quận/Huyện" {...register("address1")} />
                                <p style={{
                                    fontSize: "0.8rem",
                                    color: "red",
                                }}>{errors.address1?.message}</p>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box style={{ width: '85%' }}>
                                <input className={styles.input} placeholder="Tỉnh/thành phố" {...register("address2")} />
                                <p style={{
                                    fontSize: "0.8rem",
                                    color: "red",
                                }}>{errors.address2?.message}</p>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box className={styles.buttonFrame}>
                    <Button className={styles.button} type="submit">Đăng kí</Button>
                </Box>
            </Box>
        </form>
    )
}