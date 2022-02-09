import "../styles/main.scss";
import type { AppProps } from 'next/app'
import PersonalInfo from "./personal";
import Home from "./home";
import Register from "./register";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Component {...pageProps} />
      {/* <Register/> */}
      {/* < PersonalInfo /> */}
      {/* <Home /> */}
    </div>
  )
}

export default MyApp
