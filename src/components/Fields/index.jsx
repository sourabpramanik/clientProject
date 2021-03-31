import styles from './styles'
import { GoogleSpreadsheet } from 'google-spreadsheet';

import React, { useState }from 'react';
import { 
  Select, 
  Button, 
  Input, 
  FormControl, 
  MenuItem, 
  InputLabel,
  TextField,
  Dialog,
  Radio,
  FormControlLabel,
  RadioGroup,
  Slide } from '@material-ui/core';
  import DateFnsUtils from '@date-io/date-fns';
  import {
    MuiPickersUtilsProvider,
  
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DailogBox from '../Dailog/index'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const IDType = [
    {
      value: 'Aadhaar Card',
      label: 'Aadhaar Card',
    },
    {
      value: 'Driving License',
      label: 'Driving License',
    },
    {
      value: 'PAN Card',
      label: 'PAN Card',
    },
    {
      value: 'Passport',
      label: 'Passport',
    },
    {
        value: 'Pension Passbook',
        label: 'Pension Passbook',
    },
  ];
const Gender=[
  {
    value:'Male',
    label:'Male'
  },
  {
    value:'Female',
    label:'Female'
  },
  {
    value:'Others',
    label:'Others'
  }
]

const creds = require('../../client1-308111-5e4391b86b21.json')
export default function Fields(){
    
    const classes = styles()
    const [open, setOpen] = React.useState(false);
    const [Id, setId] = React.useState('');
    const [IdNumber, setIdNumber] = React.useState('');
    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [gender, setGender] = React.useState('')
    const [age, setAge] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [selectedDate, setSelectedDate] = React.useState(new Date(''));
    const [showForm, setShowForm] = React.useState(false)
    const [obj, setObj] = React.useState('')
    const [showFirst, setShowFirst] = React.useState(false)
    const [showSecond, setShowSecond] = React.useState(false)
    const [showThird, setShowThird] = React.useState(false)
    const [choice1, setChoice1] = useState('')
    const [choice2, setChoice2] = useState('')
    const [textfieldFirst, settextfieldFirst] = React.useState('')
    const [textfieldSecond, settextfieldSecond] = React.useState('')
    const [textfieldThird, settextfieldThird] = React.useState('')
    //const [uuid, setUuid] = React.useState('')

    function uuID() {
      return 'xxxx4xxxyxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
    const next=()=>{
      setShowForm(true)
    }
    const getOTP = async()=>{
      const SHEET_ID = '1VIQwP6Z0Y00O8tn99jloUNp-UQk_JsxzU4oAxTnPPko';
      const doc = new GoogleSpreadsheet(SHEET_ID);
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo()
        const sheet = doc.sheetsByIndex[1]
        await sheet.addRow({
         
          Phone_Number:phone,
        })
        
        setPhone(phone)
       
        setOpen(true);
        
    }
    const submitEvent = async () => {
      const SHEET_ID = '1VIQwP6Z0Y00O8tn99jloUNp-UQk_JsxzU4oAxTnPPko';
      const doc = new GoogleSpreadsheet(SHEET_ID);
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0]
        await sheet.addRow({
          Uuid:uuID(),
          ID_Type: Id, 
          ID_Number: IdNumber, 
          Name: name,
          Phone_Number:phone, 
          Gender: gender,
          Age:age,
          Address:address, 
          Date_of_birth: selectedDate,
          MED_HIS: textfieldFirst,
          ALLERGY: textfieldSecond,
          MEDICATIONS: textfieldThird,
          ADDICTIONS:choice1,
          ARMED_FORCE:choice2 });
        
        setId('')
        setIdNumber('')
        setName('')
        setGender('')
        setAge('')
        setPhone('')
        setAddress('')
        setSelectedDate('')
        setChoice1('')
        setChoice2('')
        settextfieldFirst('')
        settextfieldSecond('')
        settextfieldThird('')
        setShowFirst(false)
        setShowSecond(false)
        setShowThird(false)
    }
   
    const handleIdChange = (event) => {
      setId(event.target.value);
    };

    const handleIdNumberChange = (event) => {
      setIdNumber(event.target.value);
    };

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handlePhoneChange = (event) => {
      setPhone(event.target.value);
    };
    
    const handleAgeChange = (event) => {
      setAge(event.target.value);
    };

    const handleAddressChange = (event) => {
      setAddress(event.target.value);
    };

    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };
    const handleClose = () => {
      setOpen(false);
    };
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
    const handleFirstText =(event) =>{
      settextfieldFirst(event.target.value)
    }
    const handleSecondText =(event) =>{
      settextfieldSecond(event.target.value)
    }
    const handleThirdText =(event) =>{
      settextfieldThird(event.target.value)
    }
    
    return(
         <div className={classes.root}>
           <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="standard-adornment-amount">Phone Number</InputLabel>
            <Input
              className={classes.phoneInput}
              id="standard-adornment-amount"
              value={phone}
              onChange={handlePhoneChange}
            />
            <Button variant="contained" style={{
              backgroundColor:"#001F60",
              borderRadius:34,
              top: 20,
              left: 360,
              position: "absolute",
              height: 35,
              width: 110,
              color:'#ffffff'
              
              }}onClick={getOTP}>
              Get OTP
            </Button>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
            >
              <DailogBox/>
            </Dialog>
          </FormControl>
           <FormControl fullWidth className={classes.formControl}>
            <InputLabel id="filled-size-normal">Photo ID Proof</InputLabel>
             <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Id}
              onChange={handleIdChange}
              helperText="Please select your ID Type"
             
             >
               {IDType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
              ))}
             </Select>

          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="standard-adornment-amount">Photo ID Number</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={IdNumber}
              onChange={handleIdNumberChange}
            />
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="standard-adornment-amount">Name</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={name}
              required
              onChange={handleNameChange}
            />
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
              <InputLabel id="filled-size-normal">Gender</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              onChange={handleGenderChange}
              >
                {Gender.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
                ))}
              </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              margin="normal"
              id="standard-number"
              type="number"
              label="Age"
              value={age}
              required
              onChange={handleAgeChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="standard-adornment-amount">Address</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={address}
              onChange={handleAddressChange}
              required
            />
          </FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <FormControl >
              <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date of birth"
              format="dd/MM/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
              </FormControl>
            </MuiPickersUtilsProvider>
            <Button variant="contained" style={{
              backgroundColor:"#001F60",
              borderRadius:34,
              top: 590,
              left: 560,
              position: "absolute",
              height: 35,
              width: 110,
              color:'#ffffff'
              }} onClick={next}>
              Next
            </Button>
            {showForm==true && (<div className={classes.rectangle2}>
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
              {showFirst==true && (<TextField 
                      id="outlined-basic" 
                      className={classes.textField}
                      value={textfieldFirst}
                      rows={5}
                    onChange={handleFirstText} 
                    variant="outlined" />)}
              
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
                      id="outlined-basic" 
                      className={classes.textField}
                      value={textfieldSecond}
                      rows={5}
                    onChange={handleSecondText} 
                    variant="outlined" />)}
              
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
                      id="outlined-basic" 
                      className={classes.textField}
                      value={textfieldThird}
                      rows={5}
                    onChange={handleThirdText} 
                    variant="outlined" />)}
              
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
              <Button variant="contained" style={{
              backgroundColor:"#001F60",
              borderRadius:34,
              top: 590,
              right:0,
              position: "absolute",
              height: 35,
              width: 110,
              color:'#ffffff'
              }} onClick={submitEvent}>
              Register
            </Button>
            </div>)}
         </div>
        
        )
}
//{showForm==true && (<div className={classes.rectangle2}><NextFields/></div>)}
          