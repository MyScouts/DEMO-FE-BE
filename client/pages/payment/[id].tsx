import React, { useEffect, useState } from 'react'
import styles from './payment.module.scss'
import { useForm, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRouter } from 'next/router';
import { deletePaymentService, IPaymentInfo, updatePaymentService } from '../../reponsitory/UserService';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Delete from '@mui/icons-material/Delete';


type FormValues = {
    method: string
    firstName: string;
    lastName: string;
    cardNumber: string;
    cardExpiration: string;
    securityCode: string;
};

const schema = yup.object({
    method: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    cardNumber: yup.string().required().matches(/^[0-9]{16}$/, 'Card number must be 16 digits'),
    cardExpiration: yup.string().required().matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Card expiration must be MM/YY'),
    securityCode: yup.string().required().matches(/^[0-9]{3}$/, 'Security code must be 3 digits'),
}).required();

// 
function EditPayment() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormValues>({ resolver: yupResolver(schema) });
    const router = useRouter();
    const [paymentId, setPaymentId] = useState<string>()

    useEffect(() => {
        const data = router.query.data as string;

        if (data) {
            const paymentInfo = JSON.parse(data) as IPaymentInfo;
            setPaymentId(paymentInfo._id);
            // setPaymentInfo(JSON.parse(paymentInfo))
            setValue("firstName", paymentInfo.firstName)
            setValue("lastName", paymentInfo.lastName)
            setValue("method", paymentInfo.paymentMethod)
            setValue("cardNumber", paymentInfo.cardNumber)
            setValue("securityCode", paymentInfo.cvv)
            setValue("cardExpiration", paymentInfo.expiryDate)
        } else {
            router.push('/payment');
        }
    }, [])

    const onSubmit = handleSubmit(async (data: any) => {
        if (window.confirm("Do you want update it?")) {
            data.paymentId = router.query.id;
            const result = await updatePaymentService(data);
            if (result) {
                router.push('/payment');
                return;
            }
        }
    });

    const deletePayment = async () => {
        if (window.confirm("Do you want delete it?")) {
            const result = await deletePaymentService({ paymentId: router.query.id });
            if (result) {
                router.push('/payment');
                return;
            }
        }
    }

    return (
        <div className={`${styles.createPaymentPage}`}>
            <form onSubmit={onSubmit} className={`${styles.createPayment}`}>
                <div>
                    <div style={{ display: 'flex', justifyContent: "space-between" }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ padding: '0 .5rem 0 .5rem', cursor: "pointer" }} onClick={() => router.back()}><ArrowBack /></div>
                            <p className={`${styles.title}`}>Payment Methods</p>
                        </div>
                        <div style={{ cursor: "pointer" }} onClick={() => deletePayment()}><Delete color='error' /></div>
                    </div>
                    <div>
                        <input type="radio" value={'visa'} id="visaMethod"  {...register('method')} />
                        <label htmlFor="visaMethod">Visa</label>
                    </div>
                    <div>
                        <input type="radio" value={'masterCard'} id="masterCardMethod"  {...register('method')} />
                        <label htmlFor="masterCardMethod">MasterCard</label>
                    </div>

                    <div className={`${styles.createForm}`}>
                        <div>
                            <div className='group-input'>
                                <input type="text"    {...register('firstName')} />
                                <p className='label'>First Name</p>
                                <p className='input-error'>{errors.firstName?.message}</p>
                            </div>

                            <div className='group-input'>
                                <input type="text"   {...register('cardNumber')} />
                                <p className='label'>Credit Card Number</p>
                                <p className='input-error'>{errors.cardNumber?.message}</p>

                            </div>

                            <div className='group-input'>
                                <input type="text"   {...register('cardExpiration')} />
                                <p className='label'>Card Expiration</p>
                                <p className='input-error'>{errors.cardExpiration?.message}</p>

                            </div>
                        </div>

                        <div>
                            <div className='group-input'>
                                <input type="text"  {...register('lastName')} />
                                <p className='label'>Last Name</p>
                                <p className='input-error'>{errors.lastName?.message}</p>

                            </div>

                            <div className='group-input'>
                                <input type="text"  {...register('securityCode')} />
                                <p className='label'>Security Code</p>
                                <p className='input-error'>{errors.securityCode?.message}</p>

                            </div>
                        </div>
                    </div>

                    <button className={`${styles.button}`} type="submit">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditPayment