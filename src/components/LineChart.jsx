import { ResponsiveLine } from '@nivo/line'
import { useTheme } from '@mui/material'

// eslint-disable-next-line react/prop-types
const LineChart = ({ data, isDashboard = false }) => {
  const theme = useTheme()

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.background.contrast
            }
          },
          legend: {
            text: {
              fill: theme.palette.background.contrast
            }
          },
          ticks: {
            line: {
              stroke: theme.palette.background.contrast,
              strokeWidth: 1
            },
            text: {
              fill: theme.palette.background.contrast
            }
          }
        },
        legends: {
          text: {
            fill: theme.palette.background.contrast
          }
        },
        tooltip: {
          container: {
            color: theme.palette.primary.main
          }
        }
      }}
      colors={isDashboard ? { datum: 'color' } : { scheme: 'nivo' }} // added
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false
      }}
      yFormat=' >-.2f'
      curve='catmullRom'
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'transportation', // added
        legendOffset: 36,
        legendPosition: 'middle'
      }}
      axisLeft={{
        orient: 'left',
        tickValues: 5, // added
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : 'count', // added
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  )
}

export { LineChart }
