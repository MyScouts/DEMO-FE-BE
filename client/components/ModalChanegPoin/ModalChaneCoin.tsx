import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IPaymentInfo } from '../../reponsitory/UserService';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import * as yup from "yup";

interface IProps {
    open: boolean
    handleClose: () => void,
    totalPoint: number
}

const schema = yup.object({
    quantity: yup.number().required().positive().integer().max(1000000000),
}).required();


type FormValues = {
    quantity: number
};

const container = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ModalChaneCoin = (props: IProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });
    const router = useRouter();
    const [usedPoint, setUsedPoint] = useState(0)
    const onSubmit = handleSubmit(async (data: any) => {
        if (props.totalPoint - usedPoint >= 0) {

        } else {
            alert('Số điểm không đủ')
        }
    });

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={container}>
                <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", textTransform: "uppercase" }}>Add Money</h1>

                <form style={{ marginTop: "20px" }} onSubmit={onSubmit}>
                    <h1
                        style={{ fontSize: "1rem", fontWeight: "bold", }}>
                        Total Point:
                        <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "green" }}>
                            {props.totalPoint}
                        </span>
                    </h1>

                    <h1
                        style={{ fontSize: "1rem", fontWeight: "bold", }}>
                        Total Surplus:
                        <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "red" }}>
                            {props.totalPoint - usedPoint}
                        </span>
                    </h1>

                    <div style={{ marginTop: "20px", marginRight: "1.2rem", }}>
                        <p style={{ lineHeight: "0px" }}> Quantity</p>
                        <input type="text" style={{
                            padding: "10px",
                            marginTop: "1rem",
                            width: "100%",
                        }}
                            {...register("quantity")}
                            onChange={(e) => setUsedPoint(Number(e.target.value) * 100)}
                        />
                        <p style={{
                            fontSize: "0.8rem",
                            color: "red",
                        }}>{errors.quantity?.message}</p>
                    </div>

                    <div style={{ marginTop: "1rem", textAlign: "right" }}>
                        <a
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                padding: ".3rem 1rem .3rem 1rem",
                                marginRight: "10px",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                            onClick={props.handleClose}>
                            CANCEL
                        </a>
                        <button
                            style={{
                                backgroundColor: "green",
                                color: "white",
                                padding: ".3rem 1rem .3rem 1rem",
                                marginRight: "10px",
                                borderRadius: "5px",
                                border: "none"
                            }}>SUBMIT
                        </button>
                    </div>
                </form>
            </Box>
        </Modal>
    )
}

export default ModalChaneCoin