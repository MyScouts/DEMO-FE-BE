import { Avatar, Box } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const ContentSlideComponent = () => {
  return (
    <>
      <Box sx={{
        width: '30%',
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: '#FFFFFF',
        padding: '10px'
      }}>
        {/* Tag */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',

        }}>
          <Box sx={{
            display: 'flex',
            background: 'linear-gradient( #E57373, #E53935)',
            borderRadius: 1,
            padding: '0px 10px 0px 5px'
          }}>
            <StarIcon sx={{
              width: '17px',
              height: '17px',
              color: '#FFFFFF',
              marginRight: '10%',
              alignSelf: 'center'
            }} />
            <div style={{
              color: '#FFFFFF',
              fontSize: '15px'
            }}>
              Hot
            </div>
          </Box>

          <Box sx={{
            display: 'flex',
            background: 'linear-gradient( #E57373, #E53935)',
            borderRadius: 1,
            padding: '0px 10px 0px 5px'
          }}>
            <LocalOfferIcon sx={{
              width: '15px',
              height: '20px',
              color: '#FFFFFF',
              marginRight: '10%'
            }} />
            <div style={{
              color: '#FFFFFF',
              fontSize: '15px',
            }}>
              Math
            </div>
          </Box>
        </Box>
        <Box sx={{
          height: '50px',
          padding: '10px 20px 10px 20px',
        }}>
          <div style={{
            fontSize: '13px'
          }}>
            Từ một hộp chứa 16 thẻ được đánh số từ 1 đến 16, chọn ngẫu nhiên 4 thẻ ...
          </div>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',

        }}>
          <Box sx={{
            display: 'flex',
            width: "50%",
            justifyContent: 'space-between'
          }}>

            <Avatar
              alt={"Avatar"}
              src={""}
              sx={{
                width: "40px",
                height: "40px",
                bgcolor: "#f73378",

              }} />
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: 'calc(100% - 50px)'
            }}>
              <div style={{
                fontSize: '12px',
                fontWeight: '500',
              }}>
                Nguyen Tien Phat
              </div>
              <div style={{
                fontSize: '12px',
                fontWeight: '500',
              }}>
                1 min ago
              </div>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <AttachMoneyIcon />
            <div style={{
              fontSize: '17px',
            }}>
              23.000
            </div>
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default ContentSlideComponent;
