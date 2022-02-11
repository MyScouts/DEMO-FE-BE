import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';


const RankComponent = () => {

  const listRank = [
    {
      name: "Nguyen Tien Phat",
      rank: 1,
      star: 12124
    },
    {
      name: "Nguyen Tien Phat",
      rank: 2,
      star: 12123
    },
    {
      name: "Nguyen Tien Phat",
      rank: 3,
      star: 12123
    },
    {
      name: "Nguyen Tien Phat",
      rank: 4,
      star: 12121
    }
  ];
  return (
    <>
      {/* Title */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between'

      }}>
        <Typography variant="h5" color="#000000" sx={{
          width: 'fit-content',
          alignSelf: 'center'
        }}>
          Rank
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <IconButton>
            <SearchIcon
              sx={{
                color: '#000000',
                fontSize: '30px',
              }}
            />
          </IconButton>
          <IconButton>
            <MoreHorizIcon
              sx={{
                color: '#000000',
                fontSize: '30px',
              }}
            />
          </IconButton>
        </Box>
      </Box>
      {/* Button */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px 10px 10px'
      }}>
        <Button
          variant="outlined"
          size="small"
          sx={{
            "&.MuiButton-sizeSmall": {
              fontSize: '13px',
              height: '30px',
              width: '70px',
              border: 2,
              borderRadius: 2,
              fontWeight: '600'
            },

          }}>Day</Button>
        <Button
          variant="outlined"
          size="small"
          sx={{
            "&.MuiButton-sizeSmall": {
              fontSize: '13px',
              height: '30px',
              width: '70px',
              border: 2,
              borderRadius: 2,
              fontWeight: '600'
            },

          }}>Week</Button>
        <Button
          variant="outlined"
          size="small"
          sx={{
            "&.MuiButton-sizeSmall": {
              fontSize: '13px',
              height: '30px',
              width: '70px',
              border: 2,
              borderRadius: 2,
              fontWeight: '600'
            },

          }}>Month</Button>
      </Box>
      {listRank.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '10px 0px 10px 0px',
              padding: '10px',
              border: 1,
              borderRadius: 2,
              borderColor: '#bdbdbd'
            }}>
            <Typography variant="h4" sx={{
              fontWeight: 600,
              fontSize: '40px',
              width: '30px'
            }} >
              {item.rank}
            </Typography>
            <Box sx={{
              display: 'flex',
              width: "calc(100% - 40px)",
              justifyContent: 'space-between'
            }}>

              <Avatar
                alt={"Avatar"}
                src={""}
                sx={{
                  width: "50px",
                  height: "50px",
                  bgcolor: "#f73378",

                }} />
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: 'calc(100% - 60px)'
              }}>
                <div style={{
                  fontSize: '19px',
                  fontWeight: '500',
                }}>
                  {item.name}
                </div>
                <Box sx={{
                  display: 'flex',

                }}>
                  <div style={{
                    fontSize: '17px',
                    fontWeight: '400',

                  }}>
                    {item.star}
                  </div>
                  <StarIcon sx={{
                    width: '17px',
                    height: '17px',
                    color: '#f4a200',
                    marginLeft: '5px',
                    alignSelf: 'center'
                  }} />
                </Box>
              </Box>
            </Box>
          </Box>
        )
      })}

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px'
      }}>
        <Button
          variant="text"
          size="medium"
          sx={{
            "&.MuiButton-textSizeMedium": {
              fontWeight: '600',
              textDecoration: 'underline'
            },

          }}>Details</Button>
      </Box>
    </>
  )
}
export default RankComponent;
