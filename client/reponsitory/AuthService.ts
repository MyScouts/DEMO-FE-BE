import RequestHelper from "../common/clients";
import { BASE_URL } from "../common/config";
import { setToken, setUser } from "../utils/LocalStorage";

export const LoginService = async ({ email, password }: any) => {
  try {
    const response = await RequestHelper.post(BASE_URL + "api/auth/login", {
      email: email,
      password: password,
    });

    if (response.success) {
      setToken(response.data.successToken);
      setUser({
        userId: response.data.userId,
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      });
    }
    return true;
  } catch (error) {
    return false;
  }
};

export const RegisterService = async ({
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  sex,
  address1,
  address2,
  birthDay
}: any) => {
  try {
    const response = await RequestHelper.post(BASE_URL + "auth/register", {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      sex,
      address1,
      address2,
      birthDay
    });

    if (response.success) {
      setToken(response.data.successToken);
      setUser({
        // userId: response.data.userId,
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      });
    }
    return true;
  } catch (error) {
    return false;
  }
};


export const loginService = async ({ email, password }: any) => {
  try {
    const response = await RequestHelper.post(BASE_URL + "auth/login", {
      email,
      password
    });

    if (response.success) {
      setToken(response.data.successToken);
      setUser({
        // userId: response.data.userId,
        email: response.data.email,
        firstName: response.data.firstName,
        lastName: response.data.lastName,
      });
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}