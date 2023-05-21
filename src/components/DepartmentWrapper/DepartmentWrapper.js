import React , {useContext} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { BoardContext } from '../../context/BoardContext'
import './DepartmentWrapper.css'
const DepartmentWrapper = () => {
    const {DepartmentArray} = useContext(BoardContext)

    const [selectedDepartment, setSelectedDepartment] = React.useState('web');

    const handleChange = (event, newSelectedDepartment) => {
        setSelectedDepartment(newSelectedDepartment);
    };
  
    return (
      <ToggleButtonGroup
      className='ToggleButtonGroup'
      orientation="vertical"
        value={selectedDepartment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        color='error'
      >
        {DepartmentArray.map((deparment)=>{
            return (
                <ToggleButton key = {deparment}className='ToggleDepartmentButtons' value={deparment}>{deparment}</ToggleButton>
            )
        })}
      </ToggleButtonGroup>
    );
};

export default DepartmentWrapper;
