import {Button} from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import Modal from "@mui/material/Modal";
import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import BingMap from '../map/BingMap'
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const ButtonAdd = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
 
  return (
    <div>
      <Button onClick={handleOpen}>
        {" "}
        <AddCircleIcon fontSize="medium" sx={{ pr: "10px" }} />
        Add Shop
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4
            style={{
              color: "#2196f3",
            }}
          >
            Shop Location
          </h4>
        

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
          
          
          <Box
            sx={{
              display: "flex",
              gap: 5,
              justifyContent: "center",
            }}
          >
            {" "}
            <Button
              variant="outlined"
              color="error"
              sx={{
                py: "10px",
                px: "80px",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                py: "10px",
                px: "80px",
              }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ButtonAdd;
