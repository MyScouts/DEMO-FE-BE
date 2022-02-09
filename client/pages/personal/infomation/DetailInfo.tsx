import { Box, Button } from "@mui/material";
import { IUserInfo } from "../../../reponsitory/UserService";

interface IProps {
  userInfo: IUserInfo | null | undefined;
}


const DetaiHeroComponent = (props: IProps) => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        width: '100%',
        boxShadow: 5,
        borderRadius: 3
      }}>
        <Box sx={{
          display: 'flex',
          width: '50%',
          flexDirection: 'column',
          padding: '30px 15px 30px 30px'
        }}>
          <Box sx={{
            display: 'flex',
            width: '100%',
            marginBottom: '15px'
          }}>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: '200px'
            }}> Full Name : </p>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: 'calc(100% - 200px)'
            }}> {`${props.userInfo?.firstName + " " + props.userInfo?.lastName}`}  </p>

          </Box>
          <Box sx={{
            display: 'flex',
            width: '100%',
            marginBottom: '15px'
          }}>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: '200px'
            }}> Birthday : </p>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: 'calc(100% - 200px)'
            }}> 26/02/1999 </p>

          </Box>
          <Box sx={{
            display: 'flex',
            width: '100%',
            marginBottom: '15px'
          }}>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: '200px'
            }}> ID Number : </p>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: 'calc(100% - 200px)'
            }}> {props.userInfo?._id} </p>

          </Box>
          <Box sx={{
            display: 'flex',
            width: '100%',
            marginBottom: '15px'
          }}>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: '200px'
            }}> Phone Number : </p>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: 'calc(100% - 200px)'
            }}> {props.userInfo?.phoneNumber} </p>

          </Box>
          <Box sx={{
            display: 'flex',
            width: '100%',
            marginBottom: '15px'
          }}>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: '200px'
            }}> Address : </p>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: 'calc(100% - 200px)'
            }}> {props.userInfo?.address}</p>

          </Box>

        </Box>
        <Box sx={{
          width: '50%',
          padding: '30px 30px 30px 15px'
        }}>
          <Box sx={{
            display: 'flex',
            width: '100%',
            marginBottom: '15px'
          }}>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: '200px'
            }}> Create date : </p>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: 'calc(100% - 200px)'
            }}> {props.userInfo?.createdAt}  </p>

          </Box>
          <Box sx={{
            display: 'flex',
            width: '100%',
            marginBottom: '15px'
          }}>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: '200px'
            }}> Account Type : </p>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: 'calc(100% - 200px)'
            }}> Respondent  </p>

          </Box>
          <Box sx={{
            display: 'flex',
            width: '100%',
            marginBottom: '55px'
          }}>
            <p style={{
              fontSize: '20px',
              fontWeight: '300',
              width: '200px'
            }}> Level : </p>
            <p style={{
              fontSize: '20px',
              fontWeight: '800',
              width: 'calc(100% - 200px)'
            }}> B  </p>
          </Box>
          <Box sx={{
            display: 'flex',
            width: '100%',
          }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                "&.MuiButton-outlined": { color: "#1947BE" },
                border: "2px solid",
                borderRadius: 3,

              }}
            >

              Change Infomation
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                "&.MuiButton-outlined": { color: "#1947BE" },
                border: "2px solid",
                borderRadius: 3,
                marginLeft: '50px'
              }}
            >

              Change Password
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default DetaiHeroComponent;
