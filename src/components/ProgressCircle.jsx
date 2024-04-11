import { Box } from '@mui/material'

// eslint-disable-next-line react/prop-types
const ProgressCircle = ({ progress = '0.75', size = 40 }) => {
  const angle = progress * 360
  return (
    <Box
      sx={{
        background: (theme) =>
          `radial-gradient(${theme.palette.background.default} 50%, transparent 51%),
            conic-gradient(transparent 0deg ${angle}deg, ${theme.palette.secondary.main} ${angle}deg 360deg),
            ${theme.palette.primary.main}`,
        borderRadius: '50%',
        width: size,
        height: size
      }}
    />
  )
}

export { ProgressCircle }
