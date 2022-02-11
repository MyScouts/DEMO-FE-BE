import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './style.module.scss';
import Typography from '@mui/material/Typography';
import { useForm, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRouter } from 'next/router';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { loginService } from "../../reponsitory/AuthService";
import { alterFail, alterSuccess } from "../../reponsitory/AltertService";

type FormValues = {
    gmail: string;
    password: string;
};

const schema = yup.object({
    gmail: yup.string().required().email(),
    password: yup.string().required(),
}).required();

export default function Login({ }) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });
    const router = useRouter();

    const onSubmit = handleSubmit(async (data: any) => {
        const result = await loginService({ email: data.gmail, password: data.password });
        if (result) {
            alterSuccess("Đăng nhập thành công")
            router.push('/');
            return;
        }

        alterFail("Đăng nhập thất bại, vui lòng kiểm tra lại thông tin")
    });

    return (
        <form onSubmit={onSubmit}>
            <Box className={styles.root}>
                <Box className={styles.logo}>
                    <img src="/assets/images/AAA.png" />
                </Box>
                <Box className={styles.loginTextFrame}>
                    <Typography variant="body1" gutterBottom component="div" className={styles.loginText}>
                        Đăng nhập
                    </Typography>
                </Box>

                <Box className={styles.inputFrame}>
                    <Box style={{ width: '20%' }}>
                        <Typography gutterBottom component="div" className={styles.inputText}>
                            Gmail
                        </Typography>
                    </Box>
                    <Box style={{ width: '80%' }}>
                        <input className={styles.input} {...register("gmail")} />
                        <p style={{
                            fontSize: "0.8rem",
                            color: "red",
                        }}>{errors.gmail?.message}</p>
                    </Box>
                </Box>

                <Box className={styles.inputFrame}>
                    <Box style={{ width: '20%' }}>
                        <Typography gutterBottom component="div" className={styles.inputText}>
                            Mật khẩu
                        </Typography>
                    </Box>
                    <Box style={{ width: '80%' }}>
                        <input className={styles.input}  {...register("password")} />
                        <p style={{
                            fontSize: "0.8rem",
                            color: "red",
                        }}>{errors.password?.message}</p>
                    </Box>
                </Box>

                <Box className={styles.buttonFrame}>
                    <Button className={styles.button} type="submit">Đăng nhập</Button>
                </Box>

                <Box>
                    <Typography gutterBottom component="div" className={styles.forgetPasswordText}>
                        Quên mật khẩu
                    </Typography>
                </Box>

            </Box>
        </form>
    )
}