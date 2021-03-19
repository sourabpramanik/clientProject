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
      value: 'ADC',
      label: 'Aadhaar Card',
    },
    {
      value: 'DVL',
      label: 'Driving License',
    },
    {
      value: 'PAN',
      label: 'PAN Card',
    },
    {
      value: 'PAP',
      label: 'Passport',
    },
    {
        value: 'PPB',
        label: 'Pension Passbook',
      },
  ];
const Gender=[
  {
    value:'M',
    label:'Male'
  },
  {
    value:'F',
    label:'Female'
  },
  {
    value:'O',
    label:'Others'
  }
]


export default function Fields(){
    const classes = styles()
    const [Id, setId] = React.useState('');
    const [IdNumber, setIdNumber] = React.useState('');
    const [name, setName] = React.useState('')
    const [gender, setGender] = React.useState('')
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const submitEvent = async () => {
      const SHEET_ID = process.env.REACT_APP_SHEET_ID;
      const doc = new GoogleSpreadsheet(SHEET_ID);
      await doc.useServiceAccountAuth({
          private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
          client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      });
      await doc.loadInfo()
        const sheet = doc.sheetsByIndex[0]
        await sheet.addRow({ IDType: Id, IDNumber: IdNumber, Name: name, Gender: gender, Date: selectedDate });
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
      setName(event);
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
          <Button variant="contained" className={classes.button} onClick={submitEvent}>
            Register
          </Button>
         </div>
        )
}