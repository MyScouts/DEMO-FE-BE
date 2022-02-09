import { NextComponentType } from "next";
import { useEffect, useState } from "react";
import Register from "../../pages/register";
import { getToken } from "../../utils/LocalStorage";

function withAuth<T>(Component: NextComponentType<T>) {
    const Auth = (props: T) => {
        const [token, setToken] = useState<String>()
        // Login data added to props via redux-store (or use react context for example)
        const initToken = async () => {
            setToken(await getToken() ?? "");
        }

        useEffect(() => {
            initToken();
        }, []);

        // If user is not logged in, return login component
        if (!token) {
            return <Register />;
        }

        // If user is logged in, return original component
        return <Component {...props} />;
    };

    // Copy getInitial props so it will run as well
    if (Component.getInitialProps) {
        Auth.getInitialProps = Component.getInitialProps;
    }

    return Auth;
}

export default withAuth;