import React,{useContext} from 'react';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Done from '@mui/icons-material/Done';
import { BoardContext } from '../../context/BoardContext'
import Tooltip from "@mui/material/Tooltip";

const CompanyWrapper = () =>{
  const [value, setValue] = React.useState([]);
  const {CompiniesArray} = useContext(BoardContext)

  return (

        <List
    
          orientation="horizontal"
          wrap
          sx={{
            '--List-gap': '8px',
            '--ListItem-radius': '20px',
            '--ListItem-minHeight': '32px',
            'height' : '100%'
          }}
        
        >
          {CompiniesArray.map(
            (item, index) => (
                <Tooltip title={item.name} key={item.id+"Tooltip"}>

              <ListItem key={item.id+"ListItem"}>
                {value.includes(item.id) && (
                  <Done
                    fontSize="md"
                    color="primary"
                    sx={{ ml: -0.5, mr: 0.5, zIndex: 2, pointerEvents: 'none' }}
                  />
                )}

                <Checkbox
                key ={item.id+"CheckBox"}
                  size="sm"
                  disableIcon
                  overlay
                  label={<img src={item.src} alt=''></img>}
                  checked={value.includes(item.id)}
                  variant={value.includes(item.id) ? 'soft' : 'outlined'}
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
                            border: '1px solid',
                            borderColor: 'primary.500',
                          }
                        : {},
                    }),
                  }}
                />
              </ListItem>
              </Tooltip>
            ),
          )}
        </List>

  );
}


export default CompanyWrapper;
