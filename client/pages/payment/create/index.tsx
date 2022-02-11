import React from 'react'
import styles from './CreatePayment.module.scss'
import { useForm, Resolver } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { newPaymentService } from '../../../reponsitory/UserService';
import { useRouter } from 'next/router';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { alterFail, alterSuccess } from '../../../reponsitory/AltertService';

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

const CreateIndex = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const router = useRouter();


  const onSubmit = handleSubmit(async (data: any) => {
    const result = await newPaymentService(data);

    if (result) {
      router.push('/payment');
      alterSuccess("Tạo mới thành công")
      return;
    }

    alterFail("Tạo mới thất bại, vui lòng kiểm tra lại thông tin")
  });


  return (
    <div className={`${styles.createPaymentPage}`}>
      <form onSubmit={onSubmit} className={`${styles.createPayment}`}>
        <div>
          <div style={{ display: 'flex' }}>
            <div style={{ padding: '0 .5rem 0 .5rem', cursor: "pointer" }} onClick={() => router.back()}><ArrowBack /></div>
            <p className={`${styles.title}`}>Payment Methods</p>
          </div>
          <div>
            <input type="radio" value={'visa'} id="visaMethod"  {...register('method')} checked={true} />
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
            Submit Payment
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateIndex