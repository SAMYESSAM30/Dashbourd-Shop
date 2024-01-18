import { Box, TextField } from '@mui/material'
import React from 'react'
import BingMap from '../map/BingMap'

const Formcreate = () => {
  return (
    <div>
    <Box sx={{ mb: "30px" }}>
    <BingMap height={200} />

    <TextField
      style={{
        position: "absolute",
        top: "120px",
        left: "40px",
        backgroundColor: "white",
      }}
      label="search for location "
      id="outlined-size-small"
      size="small"
    />
  </Box>

  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "31% 31% 31%",
      columnGap: "20px",
      mb: "30px",
      justifyContent: "start",
    }}
  >
    <TextField
      id="outlined-basic"
      label="Shop Name"
      variant="outlined"
    />
    <TextField
      id="outlined-basic"
      label="Phone Number"
      variant="outlined"
    />
    <TextField
      id="outlined-basic"
      label="Shop Code"
      variant="outlined"
    />
  </Box>
    </div>
  )
}

export default Formcreate
