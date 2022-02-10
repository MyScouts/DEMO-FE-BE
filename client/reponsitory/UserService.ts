import RequestHelper from "../common/clients";
import { BASE_URL } from "../common/config";

export interface IUserInfo {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  createdAt: string;
  _id: string;
  lastLogin: string;
  ipLogin: string;
  phoneNumber: string;
  address: string;
  pointTotal: number;
  coinTotal: number;
}

export interface IPaymentInfo {
  _id: string;
  userId: string;
  paymentMethod: string;
  firstName: string;
  lastName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  createdAt: string;
  updatedAt: string;
}

export const getUserInfoService = async () => {
  try {
    const response = await RequestHelper.get(BASE_URL + "user/profile", {});

    if (response.success) {
      return response.data as IUserInfo;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const newPaymentService = async ({ cardExpiration, cardNumber, firstName, lastName, method, securityCode }: any) => {
  try {
    const response = await RequestHelper.post(BASE_URL + "user/payments", {
      cardExpiration,
      cardNumber,
      firstName,
      lastName,
      method,
      securityCode
    });

    if (response.success) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}


export const getPaymentService = async () => {
  try {
    const response = await RequestHelper.get(BASE_URL + "user/payments", {});

    if (response.success) {
      return response.data as IPaymentInfo[];
    }
    return null;
  } catch (error) {
    return null;
  }
}


export const updatePaymentService = async ({ cardExpiration, cardNumber, firstName, lastName, method, securityCode, paymentId }: any) => {
  try {
    const response = await RequestHelper.put(BASE_URL + "user/payments/" + paymentId, {
      cardExpiration,
      cardNumber,
      firstName,
      lastName,
      method,
      securityCode
    });

    if (response.success) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

export const deletePaymentService = async ({ paymentId }: any) => {
  try {
    const response = await RequestHelper.delete(BASE_URL + "user/payments/" + paymentId, {});

    if (response.success) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}


export const addPointService = async ({ point, methodId }: any) => {
  try {
    const response = await RequestHelper.post(BASE_URL + "user/point", {
      point,
      methodId
    });

    if (response.success) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}