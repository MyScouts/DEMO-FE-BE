import { NextComponentType } from "next";
import { useEffect, useState } from "react";
import Login from "../../pages/login";
import Register from "../../pages/register";
import { alterFail } from "../../reponsitory/AltertService";
import { getToken } from "../../utils/LocalStorage";

function withAuth<T>(Component: NextComponentType<T>) {
    const Auth = (props: T) => {
        // const token = getToken();
        // // If user is not logged in, return login component
        // if (!token) {
        //     console.log("🚀 ~ file: withAuth.tsx ~ line 22 ~ Auth ~ token", token)
        //     // alterFail("You are not logged in");
        //     if (typeof window !== "undefined") {
        //         // Client-side-only code
        //         window.location.href = "/login";
        //       }
        //     // return <Login />;
        // }

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