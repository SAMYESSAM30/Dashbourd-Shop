import { Button } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import Formedit from "../Forms/Formedit";

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
const ButtonEdit = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Button color="inherit" onClick={handleOpen}>
                {" "}
                <EditIcon
                    color="action"
                    sx={{
                        mr: "8px",
                    }}
                />
                Edit
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
                    <Formedit />
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

export default ButtonEdit;


