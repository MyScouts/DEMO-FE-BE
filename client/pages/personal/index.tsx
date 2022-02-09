import withAuth from "../../components/withAuth/withAuth";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import { getUserInfoService, IUserInfo } from "../../reponsitory/UserService";
import MenuComponent from "./components/Menu";
import BaseInfoComponent from "./infomation/BaseInfo";
import DetailInfoComponent from "./infomation/DetailInfo";
import BalaceComponent from "./infomation/statistic/Balance";
import ResultComponent from "./infomation/statistic/Result";

const PersonalInfo: NextPage = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo | null>()

  const getUserInfo = async () => {
    const user = await getUserInfoService()
    if (user !== null) {
      setUserInfo(user)
      console.log("🚀 ~ file: index.tsx ~ line 13 ~ userInfo", userInfo)
    }
  }

  useEffect(() => {
    getUserInfo()
  }, []);


  return (
    <>
      <Header />
      <div className="personal-container">
        <div className="slidebar">
          <MenuComponent />
        </div>
        <div className="contents">
          <div className="basic">
            <BaseInfoComponent userInfo={userInfo} />
          </div>
          <div className="details">
            <DetailInfoComponent userInfo={userInfo} />
          </div>
          <div className="statis">
            <div className="balance">
              <BalaceComponent />
            </div>
            <div className="result">
              <ResultComponent />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PersonalInfo;
