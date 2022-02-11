import { Avatar, Box, IconButton, Typography, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Link from "next/link";

const ContractComponent = () => {
  const listFriend = [
    {
      avatar: "",
      name: "Nguyen Tien Phat"
    },
    {
      avatar: "",
      name: "Tien Phat"
    },
    {
      avatar: "",
      name: "Nguyen Tien Bala"
    },
  ];
  return (
    <>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px'

      }}>
        <Typography variant="h5" color="#000000" sx={{
          width: 'fit-content',
          alignSelf: 'center'
        }}>
          Contracts
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
      {listFriend.map((item, index) => {
        return (
          <Link
            key={index}
            href={'/message'}>
            <a style={{
              textDecoration: 'none',
              color: '#000000',
            }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  '&:hover': {
                    backgroundColor: '#e0e0e0'
                  },
                  borderRadius: 2,
                  padding: '5px'
                }}
              >

                <Avatar
                  alt={"Avatar"}
                  src={`${item.avatar}`}
                  sx={{
                    width: "50px",
                    height: "50px",
                    bgcolor: "#f73378",

                  }} />
                <div style={{
                  fontSize: '19px',
                  fontWeight: '500',
                  width: 'calc(100% - 60px)',
                  alignSelf: 'center'
                }}>
                  {item.name}
                </div>

              </Box>
            </a>

          </Link>
        )
      })}
    </>
  )
}
export default ContractComponent;
