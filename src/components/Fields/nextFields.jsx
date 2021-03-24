import React, { useState } from 'react';
import { 
  Select, 
  Button, 
  Input, 
  FormControl, 
  MenuItem,
  TextField,
  Radio, 
  InputLabel } from '@material-ui/core';
import styles from './styles'

export default function NextFields(){
  const classes = styles()
  const [medHistory, setMedHistory] = useState('')
  const handleFirstChange = (e) => {
    setMedHistory(e.target.value)
  }
    return(
        <div className={classes.root}>
       
           <FormControl fullWidth className={classes.formControl}>
           <div className={classes.label}>Any Medical and Surgical Histories?</div>
            <TextField
              className={classes.textField}
              id="outlined-multiline-static"
              label="Write down your answer here."
              multiline
              rows={5}
              variant="outlined"
            />
           
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
          <div className={classes.label}>Any Allergies?</div>
            <TextField
              id="outlined-multiline-static"
              label="Write down your answer here."
              multiline
              rows={5}
              variant="outlined"
            />
           
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
          <div className={classes.label}>Any Prescription and Non-Prescription Medications Do You Take?</div>
            <TextField
              id="outlined-multiline-static"
              label="Write down your answer here."
              multiline
              rows={5}
              variant="outlined"
            />
           
          </FormControl>
      
            
        </div>
    )
}