import React, { useState } from 'react';
import { Card as Typography, Box, Checkbox, Button } from '@mui/material';
import EditTask from '../modals/EditTask';

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC"
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1"
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1"
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1"
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD"
    }
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleCheckboxChange = (e) => {
    const updatedTask = { ...taskObj, completed: e.target.checked };
    updateListArray(updatedTask, index);
  };

  return (
    <Box className="card-wrapper" sx={{ mr: 5, position: 'relative', mb: 2 }}>
      <Box className="card-top" sx={{ height: 10, backgroundColor: colors[index % 5].primaryColor }}></Box>
      <Box className="task-holder" sx={{ p: 2, backgroundColor: colors[index % 5].secondaryColor, borderRadius: 1 }}>
        <Typography className="card-header" sx={{ backgroundColor: colors[index % 5].secondaryColor, borderRadius: 1, p: 1, mb: 2 }}>
          {taskObj.Name}
        </Typography>
        <Typography variant="body2" className="mt-3">
          {taskObj.Description}
        </Typography>
        <Checkbox 
          checked={taskObj.completed || false} 
          onChange={handleCheckboxChange} 
          color="primary"
          sx={{ position: 'absolute', top: 10, right: 10 }}
        />
        <Box sx={{ position: 'absolute', bottom: 16, right: 16, display: 'flex', gap: 1 }}>
          <Button onClick={toggle} sx={{ color: colors[index % 5].primaryColor}}>Edit</Button>
          <Button onClick={handleDelete} sx={{ color: colors[index % 5].primaryColor }}>Delete</Button>
        </Box>
      </Box>
      <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
    </Box>
  );
};

export default Card;
