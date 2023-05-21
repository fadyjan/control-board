import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import SaveIcon from '@mui/icons-material/Save';
import Tooltip from "@mui/material/Tooltip";

const SubmitWrapper = () => {
  return (
    <Stack direction="row" spacing={2}>
        <Tooltip title="Delete Issue">
        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
        Delete
      </Button>
        </Tooltip>

        <Tooltip title="Save Issue">

      <Button variant="outlined" startIcon={<SaveIcon />}>
        Save
      </Button>
      </Tooltip>

      <Tooltip title="Send Issue">

      <Button variant="contained" endIcon={<SendIcon />}>
        Submit
      </Button>
      </Tooltip>
    </Stack>
  );
};

export default SubmitWrapper;
