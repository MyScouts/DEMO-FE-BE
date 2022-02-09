import { Avatar, Box, Button } from "@mui/material";
import { IUserInfo } from "../../../reponsitory/UserService";

interface IProps {
  userInfo: IUserInfo | null | undefined;
}


const BaseInfoComponent = (props: IProps) => {
  const srcImage = props.userInfo?.avatar
  const gmail = props.userInfo?.email;
  const idUser = props.userInfo?._id;
  const lastLogin = props.userInfo?.lastLogin;
  const ipUser = props.userInfo?.ipLogin;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          backgroundColor: "#FFFFFF",
          boxShadow: 3,
          borderRadius: 3
        }}
      >
        <Box sx={{
          padding: "15px 20px 15px 25px"
        }}>
          <Avatar
            alt={`Avatar`}
            src={`${srcImage}`}
            sx={{
              width: "100px",
              height: "100px",
              bgcolor: "#f73378",

            }} />
        </Box>
        <Box sx={{
          width: "60%",
          padding: "30px 0 0 0",
          display: 'flex'
        }}>
          <Box sx={{
            width: '50%'
          }}>
            <Box sx={{
              display: 'flex',
              width: '100%',
              marginBottom: '15px'
            }}>
              <p style={{
                fontSize: '17px',
                fontWeight: '300',
                width: '130px'
              }}> Email : </p>
              <p style={{
                fontSize: '17px',
                fontWeight: '800',
                width: 'calc(100% - 20px)'
              }}> {gmail}  </p>

            </Box>
            <Box sx={{
              display: 'flex',
              width: '100%',
              marginBottom: '15px'
            }}>
              <p style={{
                fontSize: '17px',
                fontWeight: '300',
                width: '130px'
              }}> Last login : </p>
              <p style={{
                fontSize: '19px',
                fontWeight: '300',
                width: 'calc(100% - 20px)'
              }}> {lastLogin}  </p>

            </Box>
          </Box>
          <Box sx={{
            width: '50%'
          }}>
            <Box sx={{
              display: 'flex',
              width: '100%',
              marginBottom: '15px'
            }}>
              <p style={{
                fontSize: '17px',
                fontWeight: '300',
                width: '100px'
              }}> ID User : </p>
              <p style={{
                fontSize: '17px',
                fontWeight: '300',
                width: 'calc(100% - 20px)'
              }}> {idUser}  </p>

            </Box>
            <Box sx={{
              display: 'flex',
              width: '100%',
              marginBottom: '15px'
            }}>
              <p style={{
                fontSize: '17px',
                fontWeight: '300',
                width: '100px'
              }}> IP : </p>
              <p style={{
                fontSize: '19px',
                fontWeight: '300',
                width: 'calc(100% - 20px)'
              }}> {ipUser}  </p>

            </Box>
          </Box>


        </Box>
        <Box sx={{
          width: "30%",
          position: "relative"
        }}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              "&.MuiButton-outlined": { color: "#1947BE" },
              border: "2px solid",
              borderRadius: 3,
              position: "absolute",
              top: "30%",
              left: "25%",
            }}
          >
            Verify Account
          </Button>
        </Box>
      </Box>
    </>
  );
}
export default BaseInfoComponent;
