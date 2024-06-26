import { useTheme } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import { geoFeatures } from './geoFeatures.js'

// eslint-disable-next-line react/prop-types
const GeographyChart = ({ data, isDashboard = false }) => {
  const theme = useTheme()
  return (
    <ResponsiveChoropleth
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
        }
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors='nivo'
      domain={[0, 1000000]}
      unknownColor='#666666'
      label='properties.name'
      valueFormat='.2s'
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor='#ffffff'
      legends={
        !isDashboard
          ? [
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: theme.palette.background.contrast,
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#ffffff',
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]
          : undefined
      }
    />
  )
}

export { GeographyChart }
