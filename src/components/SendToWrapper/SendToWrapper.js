import React, { useContext,useState } from "react";
import { BoardContext } from "../../context/BoardContext";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Done from "@mui/icons-material/Done";
import Avatar from "@mui/joy/Avatar";
import Tooltip from "@mui/material/Tooltip";
import "./SendToWrapper.css";

const SendToWrapper = () => {
  const [value, setValue] = useState([]);

  const { Avatars } = useContext(BoardContext);

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
      {Avatars.map((item) => (
         <Tooltip title={item.name} key={item.id +"ToolTip"}>
        <ListItem
          key={item.id +"ListItem"}
          sx={{
            position: "relative",
          }}
        >
          {value.includes(item.id) && (
            <Done
              fontSize="md"
              color="primary"
              sx={{ ml: -0.5, mr: 0.5, zIndex: 2, pointerEvents: "none" }}
            />
          )}

          <Checkbox
            key={item.id + "_CheckBox"}
            size="sm"
            disableIcon
            overlay
            label={
             
                <Avatar src={item.src} alt=""></Avatar>
            }
            checked={value.includes(item.id)}
            variant={value.includes(item.id) ? "soft" : "outlined"}
            onChange={(event) => {
              if (event.target.checked) {
                setValue((val) => [...val, item.id]);
              } else {
                setValue((val) => val.filter((text) => text !== item.id));
              }
            }}
            slotProps={{
              action: ({ checked }) => ({
                sx: checked
                  ? {
                      border: "1px solid",
                      borderColor: "primary.500",
                    }
                  : {},
              }),
            }}
          />
        </ListItem>
        </Tooltip>

      ))}
    </List>
  );
};

export default SendToWrapper;
