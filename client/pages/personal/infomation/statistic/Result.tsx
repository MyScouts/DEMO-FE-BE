import { Box, Divider, Button } from "@mui/material";
import { useState } from "react";
import PieChart, {
  Legend,
  Series,
  Format,
  Label,
  Connector,
  Tooltip,
  Export,
  Size
} from 'devextreme-react/pie-chart';
const ResultComponent = () => {

  const initialSubject = [{
    region: 'Math',
    val: 10,
  }, {
    region: 'Physical',
    val: 20,
  }, {
    region: 'English',
    val: 40,
  }, {
    region: 'Chemestry',
    val: 35,
  }, {
    region: 'History',
    val: 80,
  }, {
    region: 'Another',
    val: 100,
  }];

  const handleCustomizeTooltip = (arg: any) => {
    return {
      text: `${arg.valueText} - ${(arg.percent * 100).toFixed(2)}%`,
    };
  }
  const [subject, setSubject] = useState(initialSubject);
  return (
    <>
      <Box sx={{
        backgroundColor: '#FFFFFF',
        boxShadow: 5,
        borderRadius: 3,
        padding: "20px 20px 10px 20px"
      }}>
        <Box sx={{
          width: '100%',

        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <p style={{
              alignSelf: 'end',
              fontSize: '20px',
              fontWeight: '400',
              marginBottom: '10px',
              flexDirection: 'column'
            }}> Statistics</p>
            <Button
              variant="text"
              sx={{
                "&.MuiButton-outlined": { color: "#1947BE" },
                width: '150px',
                textDecoration: 'underline'
              }}
            >

              Details
            </Button>
          </Box>

          <Divider
            sx={{
              marginBottom: '30px',
              backgroundColor: 'black'
            }}>
          </Divider>

        </Box>
        <Box sx={{
        }}>
          <PieChart
            id="pie"
            type="doughnut"
            title="Activity"
            dataSource={initialSubject}
          >
            <Size
              height={300}
              width={500}
            />
            <Series argumentField="region">
              <Label visible={true} >
                <Connector visible={true} />
              </Label>
            </Series>
            {/* <Export enabled={true} /> */}
            <Legend
              margin={0}
              horizontalAlignment="right"
              verticalAlignment="top"
            />
            <Tooltip enabled={true} customizeTooltip={handleCustomizeTooltip}>
              <Format type="decimals" />
            </Tooltip>
          </PieChart>
        </Box>
        <Divider
          sx={{
            marginBottom: '30px',
            backgroundColor: 'black'
          }}>
        </Divider>


      </Box>
    </>
  )
}
export default ResultComponent;
