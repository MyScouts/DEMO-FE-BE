
import { Avatar, Box, Divider, Icon } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import cs from "classnames";
import CalculateIcon from '@mui/icons-material/Calculate';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import { useEffect } from "react";
import { loadCSS } from 'fg-loadcss';
import TelegramIcon from '@mui/icons-material/Telegram';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MoreIcon from '@mui/icons-material/More';
import GroupsIcon from '@mui/icons-material/Groups';

const HomeMenu = () => {
  const altImage = "Avatar";
  const groups = [
    {
      avatar: "",
      name: "Math 12A",
      color: "#000000"

    },
    {
      avatar: "",
      name: "Physics 12A",
      color: "#9c27b0"

    },
    {
      avatar: "",
      name: "Chemestry 12A",
      color: "#1976d2"

    },
    {
      avatar: "",
      name: "Literature 12A",
      color: "#33691e"

    }
  ]
  const router = useRouter();
  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
      // Inject before JSS
      // @ts-ignore
      document.querySelector('#font-awesome-css') || document.head.firstChild,
    );

    return () => {
      node.parentNode!.removeChild(node);
    };
  }, []);
  return (
    <>
      <Box
        sx={{
          width: '100%',
          backgroundColor: "#FFFFFF",
          boxShadow: 5,
          borderRadius: 3,
          paddingBottom: '100px'
        }}>

        <div className="nav-link">

          <Link
            href={'/math'}
          >
            <a
              className="nav-link-item">
              <div className={cs("nav-link-item-icon",
                router.pathname.split("/")[1] === 'math'
                  ? "selected"
                  : ""
              )}>
                <CalculateIcon
                  sx={{
                    fontSize: '30px'
                  }} />
              </div>

              <div className={cs("nav-link-item-title",
                router.pathname.split("/")[1] === 'math'
                  ? "selected"
                  : "")}>
                <p> Mathematics</p>

              </div>
            </a>
          </Link>
          <Link
            href={'/physic'}
          >
            <a
              className="nav-link-item">
              <div className={cs("nav-link-item-icon",
                router.pathname.split("/")[1] === 'physic'
                  ? "selected"
                  : ""
              )}>
                <Icon baseClassName="fas" className="fa-atom" sx={{ fontSize: 30 }} />
              </div>

              <div className={cs("nav-link-item-title",
                router.pathname.split("/")[1] === 'physic'
                  ? "selected"
                  : "")}>
                Physics
              </div>
            </a>
          </Link>
          <Link
            href={'/chemestry'}
          >
            <a
              className="nav-link-item">
              <div className={cs("nav-link-item-icon",
                router.pathname.split("/")[1] === 'chemestry'
                  ? "selected"
                  : ""
              )}>
                <ScienceRoundedIcon
                  sx={{
                    fontSize: '30px'
                  }} />
              </div>

              <div className={cs("nav-link-item-title",
                router.pathname.split("/")[1] === 'chemestry'
                  ? "selected"
                  : "")}>
                Chemestry
              </div>
            </a>
          </Link>
          <Link
            href={'/english'}
          >
            <a
              className="nav-link-item">
              <div className={cs("nav-link-item-icon",
                router.pathname.split("/")[1] === 'english'
                  ? "selected"
                  : ""
              )}>
                <TelegramIcon
                  sx={{
                    fontSize: '30px'
                  }} />
              </div>

              <div className={cs("nav-link-item-title",
                router.pathname.split("/")[1] === 'english'
                  ? "selected"
                  : "")}>
                English
              </div>
            </a>
          </Link>
          <Link
            href={'/literature'}
          >
            <a
              className="nav-link-item">
              <div className={cs("nav-link-item-icon",
                router.pathname.split("/")[1] === 'literature'
                  ? "selected"
                  : ""
              )}>
                <MenuBookIcon sx={{
                  fontSize: '30px'
                }} />
              </div>

              <div className={cs("nav-link-item-title",
                router.pathname.split("/")[1] === 'literature'
                  ? "selected"
                  : "")}>
                Literature
              </div>
            </a>
          </Link>
          <Link
            href={'/more'}
          >
            <a
              className="nav-link-item">
              <div className={cs("nav-link-item-icon",
                router.pathname.split("/")[1] === 'more'
                  ? "selected"
                  : ""
              )}>
                <MoreIcon sx={{
                  fontSize: '30px'
                }} />
              </div>

              <div className={cs("nav-link-item-title",
                router.pathname.split("/")[1] === 'more'
                  ? "selected"
                  : "")}>
                More
              </div>
            </a>
          </Link>
        </div>
        <Divider
          variant="middle"
          sx={{
            marginBottom: '30px',
            backgroundColor: 'black'
          }}>
        </Divider>
        <Box sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <div style={{
            width: '50px',
          }}>
            <GroupsIcon sx={{
              fontSize: '30px',
              color: 'black',
            }} />
          </div>

          <div style={{
            display: 'flex',
            fontSize: '22px',
            color: 'black',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 'calc(100% - 150px)',
          }}>
            Groups
          </div>
        </Box>
        {groups.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                marginBottom: '15px',
                marginLeft: '15%'
              }}>
              <Box sx={{
                width: '60px'
              }}>
                <Avatar
                  alt={`${altImage}`}
                  src={`${item.avatar}`}
                  sx={{
                    width: "40px",
                    height: "40px",
                    bgcolor: `${item.color}`,

                  }} />
              </Box>

              <div style={{
                width: 'calc(100% - 120px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontSize: '17px'
              }}>
                {item.name}
              </div>
            </Box>
          )
        })}

      </Box>
    </>
  );
}

export default HomeMenu;
