import { Box, Divider } from "@mui/material";
import RankComponent from "./rank-and-contract/Rank";
import ContractComponent from "./rank-and-contract/Contract";

const RankAndContract = () => {
  return (
    <>
      <Box sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: 5,
        borderRadius: 3,
        padding: '10px 10px 10px 30px'
      }}>
        <RankComponent />
        <Divider
          variant="middle"
          sx={{
            backgroundColor: 'black'
          }}>
        </Divider>
        <ContractComponent />
      </Box>
    </>
  )
}

export default RankAndContract;
