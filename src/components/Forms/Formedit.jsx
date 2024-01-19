import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import BingMap from '../map/BingMap'

const Formedit = () => {

   const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
    console.log(name, phone, code)
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
        onChange={(e) => setName(e.target.value)}
    />
    <TextField
      id="outlined-basic"
      label="Phone Number"
      variant="outlined"
        onChange={(e) => setPhone(e.target.value)}
    />
    <TextField
      id="outlined-basic"
      label="Shop Code"
      variant="outlined"
        onChange={(e) => setCode(e.target.value)}
    />
  </Box>
    </div>
  )
}

export default Formedit
