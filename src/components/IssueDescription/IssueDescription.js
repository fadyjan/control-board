import React from "react";
import List from "@mui/joy/List";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Input from "@mui/joy/Input";
import CloudUpload from "@mui/icons-material/CloudUpload";

const IssueDescription = () => {
  return (
    <List
      orientation="horizontal"
      wrap
      sx={{
        "--List-gap": "8px",
        "--ListItem-radius": "20px",
        "--ListItem-minHeight": "32px",
        height: "100%",
      }}
    >
      <Input placeholder="ISSUE DESCRIPTION" variant="outlined" />
      <Input placeholder="Choices" variant="outlined" />
      <Input placeholder="Choices" variant="outlined" />
      <Input placeholder="Choices" variant="outlined" />
      <Input placeholder="Note" variant="outlined" />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Basic date picker" />
        </DemoContainer>
      </LocalizationProvider>
      <>
        <input type="file" name="file" />
        <CloudUpload></CloudUpload>
      </>
    </List>
  );
};

export default IssueDescription;
