import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Divider } from "@mui/material";
import { useState } from "react";

const BalanceComponent = () => {
  const balance = 200000;
  const deposit = 100000;
  const withdraw = 100000;
  const rank = 400;
  const rankHightest = 700;
  const rankLowest = 200;
  const [time, setTime] = useState<string>();
  const handleChangeTime = (event: SelectChangeEvent) => {

  }

  return (
    <>
      <Box sx={{
        backgroundColor: '#FFFFFF',
        boxShadow: 5,
        borderRadius: 3,
        padding: "0px 20px 10px 20px"
      }}>
        <Box sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'end'
          }}>
            <p style={{
              width: '100px',
              fontSize: '19px'
            }}>Balance: </p>
            <p style={{
              fontSize: '19px',
              fontWeight: '800'
            }}>{balance} </p>
          </Box>
          <FormControl variant="standard" sx={{ minWidth: '120px' }}>
            <InputLabel id="balance-time-filter">Time</InputLabel>
            <Select
              labelId="balance-time-filter"
              id="item-selected"
              value={time}
              onChange={handleChangeTime}
              label="Time"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem
                value={"day"}
              >
                Day
              </MenuItem>
              <MenuItem
                value={"week"}
              >
                Week
              </MenuItem>
              <MenuItem
                value={"month"}
              >
                Month
              </MenuItem>
              <MenuItem
                value={"year"}
              >
                Year
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Divider variant="middle" sx={{
          marginBottom: '50px',
          backgroundColor: 'black'
        }} />
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '100px',
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'end'
          }}>
            <p style={{
              width: '100px',
              fontSize: '19px'
            }}>Deposit: </p>
            <p style={{
              fontSize: '19px',
              fontWeight: '800'
            }}>{deposit} </p>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'end',
          }}>
            <p style={{
              width: '100px',
              fontSize: '19px'
            }}>Withdraw: </p>
            <p style={{
              fontSize: '19px',
              fontWeight: '800'
            }}>{withdraw} </p>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'end'
          }}>
            <p style={{
              width: '100px',
              fontSize: '19px'
            }}>Rank: </p>
            <p style={{
              fontSize: '19px',
              fontWeight: '800'
            }}>{rank} </p>
          </Box>
          <FormControl variant="standard" sx={{ minWidth: '120px' }}>
            <InputLabel id="balance-time-filter">Time</InputLabel>
            <Select
              labelId="balance-time-filter"
              id="item-selected"
              value={time}
              onChange={handleChangeTime}
              label="Time"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem
                value={"day"}
              >
                Day
              </MenuItem>
              <MenuItem
                value={"week"}
              >
                Week
              </MenuItem>
              <MenuItem
                value={"month"}
              >
                Month
              </MenuItem>
              <MenuItem
                value={"year"}
              >
                Year
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Divider variant="middle" sx={{
          backgroundColor: 'black',
          marginBottom: '50px',
        }} />
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '55px',
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'end'
          }}>
            <p style={{
              width: '100px',
              fontSize: '19px'
            }}>Hightest: </p>
            <p style={{
              width: '50px',
              fontSize: '19px',
              fontWeight: '800'
            }}>{rankHightest} </p>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'end',
          }}>
            <p style={{
              width: '100px',
              fontSize: '19px'
            }}>Lowest: </p>
            <p style={{
              fontSize: '19px',
              fontWeight: '800'
            }}>{rankLowest} </p>
          </Box>
        </Box>
      </Box>
    </>
  )
}
export default BalanceComponent;
