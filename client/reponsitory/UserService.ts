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
