import React from 'react'
import Modal from '@mui/material/Modal';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { addPointService, IPaymentInfo } from '../../reponsitory/UserService';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import * as yup from "yup";

interface IProps {
    open: boolean
    handleClose: () => void,
    paymentsInfos: IPaymentInfo[] | null | undefined


}

const schema = yup.object({
    method: yup.string().required(),
    quantity: yup.number().required().positive().integer().max(1000000000),
}).required();


type FormValues = {
    method: string,
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


const cc_format = (value: string) => {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    var matches = v.match(/\d{4,16}/g);
    var match = matches && matches[0] || ''
    var parts = []

    for (var i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
        return parts.join(' ')
    } else {
        return value
    }
}

const ModalChangePoint = (props: IProps) => {
    const { register, handleSubmit, formState: { errors } ,setValue} = useForm<FormValues>({ resolver: yupResolver(schema) });
    const router = useRouter();

    const onSubmit = handleSubmit(async (data: any) => {
        const result = await addPointService({ point: data.quantity, methodId: data.method })
        if (result) {
            setValue('quantity', 0)
            props.handleClose()
            router.reload()
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
                    <div style={{ marginTop: "10px" }}>
                        <p style={{ lineHeight: "0px" }}> Payment</p>
                        <select id=""
                            {...register("method")}
                            style={{
                                padding: "10px",
                                marginTop: "1rem",
                                width: "100%",
                            }}>
                            {props.paymentsInfos && props.paymentsInfos.map((paymentInfo, index) =>
                                <option key={index} value={paymentInfo._id}>{cc_format(paymentInfo.cardNumber)} - {paymentInfo.paymentMethod}</option>)}
                        </select>
                        <p style={{
                            fontSize: "0.8rem",
                            color: "red",
                        }}>{errors.method?.message}</p>
                    </div>
                    <div style={{ marginTop: "10px", marginRight: "1.2rem" }}>
                        <p style={{ lineHeight: "0px" }}> Quantity</p>
                        <input type="text" style={{
                            padding: "10px",
                            marginTop: "1rem",
                            width: "100%",
                        }}
                            {...register("quantity")}
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

export default ModalChangePoint