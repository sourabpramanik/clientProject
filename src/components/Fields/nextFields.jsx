import React, { useState } from 'react';
import { 
  Select, 
  Button, 
  Input, 
  FormControl, 
  MenuItem,
  TextField,
  Radio, 
  InputLabel,
  RadioGroup,
  FormControlLabel } from '@material-ui/core';
import styles from './styles'

export default function NextFields(){
  const classes = styles()
  
  const [showFirst, setShowFirst] = React.useState(false)
  const [showSecond, setShowSecond] = React.useState(false)
  const [showThird, setShowThird] = React.useState(false)
  const [choice1, setChoice1] = useState('')
  const [choice2, setChoice2] = useState('')

  const handleFirstChange =() =>{
    setShowFirst(true)
  }
  const handleSecondChange =() =>{
    setShowSecond(true)
  }
  const handleThirdChange =() =>{
    setShowThird(true)
  }
  const handleChoice1 = (event) => {
    setChoice1(event.target.value);
  };
  const handleChoice2 = (event) => {
    setChoice2(event.target.value);
  };

    return(
        <div className={classes.root}>
       
           <FormControl fullWidth className={classes.formControl}>
           <div className={classes.label}>Any Medical and Surgical Histories?</div>
           <Button 
            variant="contained"
            color="primary"
            style={{
              left:0,
              width:20,
              borderRadius:34,
              margin:4
            }}
            onClick={handleFirstChange}
            >Yes</Button>
           {showFirst==true && ( <TextField
              className={classes.textField}
              id="outlined-multiline-static"
              label="Write down your answer here."
              multiline
              rows={5}
              variant="outlined"
            />)}
           
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
          <div className={classes.label}>Any Allergies?</div>
          <Button 
            variant="contained"
            color="primary"
            style={{
              left:0,
              width:20,
              borderRadius:34,
              margin:4
            }}
            onClick={handleSecondChange}
            >Yes</Button>
            {showSecond==true && ( <TextField
              className={classes.textField}
              id="outlined-multiline-static"
              label="Write down your answer here."
              multiline
              rows={5}
              variant="outlined"
            />)}
           
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
          <div className={classes.label}>Any Prescription and Non-Prescription Medications Do You Take?</div>
          <Button 
            variant="contained"
            color="primary"
            style={{
              left:0,
              width:20,
              borderRadius:34,
              margin:4
            }}
            onClick={handleThirdChange}
            >Yes</Button>
            {showThird==true && ( <TextField
              className={classes.textField}
              id="outlined-multiline-static"
              label="Write down your answer here."
              multiline
              rows={5}
              variant="outlined"
            />)}
           
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
          <div className={classes.label}>Smoking, Alcohol, and Illicit Drug Use History?</div>
          <RadioGroup className={classes.radio} value={choice1} onChange={handleChoice1}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
          <div className={classes.label}>Have You Served in the Armed Forces?</div>
          <RadioGroup className={classes.radio} value={choice2} onChange={handleChoice2}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          </FormControl>
            
        </div>
    )
}