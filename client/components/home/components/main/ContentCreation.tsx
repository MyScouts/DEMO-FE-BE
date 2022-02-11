import { Box, Button } from "@mui/material";
import Image from 'next/image'
import helperPic from '../../../../public/assets/images/home/help.png'
const ContentCreationComponent = () => {
  return (
    <>
      <Box sx={{
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '30px 200px 30px 70px'
      }}>
        <Box sx={{
        }}>
          <div style={{
            fontSize: '23px',
            fontWeight: '700',
            marginBottom: '20px'
          }}>
            Are you needing help?
          </div>
          <Button variant="contained" sx={{
            fontWeight: "600",
            borderRadius: 2,
            backgroundColor: '#2962F5',
          }}>Create Question</Button>
        </Box>
        <Image
          src={helperPic}
          alt="Picture of the author"
        />
      </Box>

    </>
  )
}

export default ContentCreationComponent;
