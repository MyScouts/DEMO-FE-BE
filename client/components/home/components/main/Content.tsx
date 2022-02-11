import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Divider, IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import MessageIcon from '@mui/icons-material/Message';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const ContentComponent = () => {
  return (
    <>
      <Card sx={{
        ".MuiCardHeader-action": {
          height: '100px'
        },
        ".MuiCardHeader-title": {
          fontSize: '23px'
        },
        ".MuiCardHeader-subheader": {
          fontSize: '17px'
        },
        ".MuiCardActions-spacing": {
          marginLeft: '20px'
        },
        borderRadius: 2,
        boxShadow: 3

      }}>
        <CardHeader
          avatar={
            <Avatar sx={{
              width: '80px',
              height: '80px',
              bgcolor: "#ff1744",
            }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton
              sx={{
                height: "100%",
                marginRight: '50px',
              }}
              aria-label="settings">
              <MoreVertIcon sx={{
                fontSize: '40px'
              }} />
            </IconButton>
          }
          title={"Nguyen Tien Phat"}
          subheader={"1 min ago"}
        >
        </CardHeader>
        <CardContent >
          <Typography variant="h6" color="#000000" sx={{
            marginBottom: '50px',
            marginLeft: '40px',
            marginRight: '20px'
          }} >
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
          <Box sx={{
            display: 'flex',
            width: '30%',
            justifyContent: 'space-between',
            marginInlineStart: 'auto'
          }}>
            <div style={{
              display: 'flex',
              width: '47%',
              justifyContent: 'end'
            }}>
              <Typography variant="h6" color="#000000" sx={{
                width: 'fit-content'
              }} >
                20 Comment
              </Typography>

            </div>
            <div style={{
              display: 'flex',
              width: '47%',
              justifyContent: 'start'
            }}>
              <Typography variant="h6" color="#000000" sx={{
                width: 'fit-content'
              }} >
                10 Answer
              </Typography>
            </div>
          </Box>
          <Divider
            variant="middle"
            sx={{
              backgroundColor: 'black'
            }}>
          </Divider>
        </CardContent>
        <CardActions >
          <Box sx={{
            display: 'flex',
            width: '60%',
            justifyContent: 'space-between',
          }}>
            <Box sx={{
              display: 'flex',
              width: '31%',
              justifyContent: 'space-between',
            }}>
              <IconButton aria-label="add to favorites">
                <ThumbUpAltOutlinedIcon
                  sx={{
                    fontSize: '30px'
                  }}
                />
              </IconButton>
              <Typography color="#000000" sx={{
                width: 'calc(100% - 40px)',
                fontSize: '20px',
                alignSelf: 'center'
              }} >
                20
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              width: '31%',
              justifyContent: 'space-between',
            }}>
              <IconButton aria-label="comment">
                <MessageIcon
                  sx={{
                    fontSize: '30px'
                  }} />
              </IconButton>
              <Typography color="#000000" sx={{
                width: 'calc(100% - 40px)',
                fontSize: '20px',
                alignSelf: 'center'
              }} >
                Comments
              </Typography>
            </Box>

            <Box sx={{
              display: 'flex',
              width: '31%',
              justifyContent: 'space-between',
            }}>
              <IconButton aria-label="comment">
                <QuestionAnswerIcon
                  sx={{
                    fontSize: '30px'
                  }} />
              </IconButton>
              <Typography color="#000000" sx={{
                width: 'calc(100% - 40px)',
                fontSize: '20px',
                alignSelf: 'center'
              }} >
                Answers
              </Typography>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            width: '40%',
            justifyContent: 'end',
          }}>
            <Box sx={{
              display: 'flex',
              width: '31%',
            }}>
              <LocalOfferIcon
                sx={{
                  fontSize: '30px'
                }}
              />
              <Typography color="#000000" sx={{
                width: 'calc(100% - 40px)',
                fontSize: '20px',
                alignSelf: 'center'
              }} >
                Math
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              width: '31%',
            }}>
              <AttachMoneyIcon
                sx={{
                  fontSize: '30px'
                }}
              />
              <Typography color="#000000" sx={{
                width: 'calc(100% - 40px)',
                fontSize: '20px',
                alignSelf: 'center'
              }} >
                23.000
              </Typography>
            </Box>
          </Box>

        </CardActions>
      </Card>
    </>
  )
}
export default ContentComponent;
