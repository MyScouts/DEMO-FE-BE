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
}: any) => {
  console.log(
    "🚀 ~ file: AuthService.ts ~ line 39 ~",
    BASE_URL + "auth/register"
  );
  try {
    const response = await RequestHelper.post(BASE_URL + "auth/register", {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
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
