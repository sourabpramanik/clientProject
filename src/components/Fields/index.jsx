import styles from './styles'
import { GoogleSpreadsheet } from 'google-spreadsheet';
import React from 'react';
import { 
  Select, 
  Button, 
  Input, 
  FormControl, 
  MenuItem, 
  InputLabel } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,

  KeyboardDatePicker,
} from '@material-ui/pickers';
require('dotenv').config()
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
    const [Id, setId] = React.useState('');
    const [IdNumber, setIdNumber] = React.useState('');
    const [name, setName] = React.useState('')
    const [gender, setGender] = React.useState('')
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const submitEvent = async () => {
      const SHEET_ID = '1VIQwP6Z0Y00O8tn99jloUNp-UQk_JsxzU4oAxTnPPko';
      const doc = new GoogleSpreadsheet(SHEET_ID);
      await doc.useServiceAccountAuth(creds);
      await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0]
        await sheet.addRow({ ID_Type: Id, ID_Number: IdNumber, Name: name, Gender: gender, Date_of_birth: selectedDate });
        setId('')
        setIdNumber('')
        setName('')
        setGender('')
        setSelectedDate('')
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
    
    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };
    return(
         <div className={classes.root}>
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
            top: 400,
            left: 560,
            position: "absolute",
            height: 35,
            width: 110,
            color:'#ffffff'
            }} onClick={submitEvent}>
            Register
          </Button>
         </div>
        )
}