/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, makeStyles } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArticleIcon from '@mui/icons-material/Article';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cs from "classnames";

const dataMenu = [
  {
    name: 'Infomation',
    path: '/personal',
  },
  {
    name: 'Active',
    path: '/personal/active',
  }
]
const MenuComponent = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: "#FFFFFF",
        boxShadow: 5,
        borderRadius: 3,
        paddingBottom: '250px'
      }}>

      <p className="title-menu"> Personal</p>
      <div className="nav-link">

        <Link key={0}
          href={'/personal'}
        >
          <a
            className="nav-link-item">
            <div className={cs("nav-link-item-icon",
              router.pathname.split("/")[1] === 'personal'
                ? "selected"
                : ""
            )}>
              <NotificationsIcon
                sx={{
                  fontSize: '30px'
                }} />
            </div>

            <div className={cs("nav-link-item-title",
              router.pathname.split("/")[1] === 'personal'
                ? "selected"
                : "")}>
              <p> Infomation</p>

            </div>
          </a>
        </Link>
        <Link key={1}
          href={'/active'}
        >
          <a
            className="nav-link-item">
            <div className={cs("nav-link-item-icon",
              router.pathname.split("/")[1] === 'active'
                ? "selected"
                : ""
            )}>
              <ArticleIcon
                sx={{
                  fontSize: '30px'
                }} />
            </div>

            <div className={cs("nav-link-item-title",
              router.pathname.split("/")[1] === 'active'
                ? "selected"
                : "")}>
              Active
            </div>
          </a>
        </Link>
        <Link key={2}
          href={'/payment'}
        >
          <a
            className="nav-link-item">
            <div className={cs("nav-link-item-icon",
              router.pathname.split("/")[1] === 'payment'
                ? "selected"
                : ""
            )}>
              <PaymentIcon
                sx={{
                  fontSize: '30px'
                }} />
            </div>

            <div className={cs("nav-link-item-title",
              router.pathname.split("/")[1] === 'payment'
                ? "selected"
                : "")}>
              Payment
            </div>
          </a>
        </Link>
        <Link key={3}
          href={'/setting'}
        >
          <a
            className="nav-link-item">
            <div className={cs("nav-link-item-icon",
              router.pathname.split("/")[1] === 'setting'
                ? "selected"
                : ""
            )}>
              <SettingsIcon sx={{
                fontSize: '30px'
              }} />
            </div>

            <div className={cs("nav-link-item-title",
              router.pathname.split("/")[1] === 'setting'
                ? "selected"
                : "")}>
              Setting
            </div>
          </a>
        </Link>
        <Link key={3}
          href={'/logout'}
        >
          <a
            className="nav-link-item">
            <div className={cs("nav-link-item-icon",
              router.pathname.split("/")[1] === 'logout'
                ? "selected"
                : ""
            )}>
              <LogoutIcon sx={{
                fontSize: '30px'
              }} />
            </div>

            <div className={cs("nav-link-item-title",
              router.pathname.split("/")[1] === 'logout'
                ? "selected"
                : "")}>
              Logout
            </div>
          </a>
        </Link>
      </div>
    </Box>
  )

}
export default MenuComponent;
