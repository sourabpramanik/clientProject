import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const creds = require('../../client1-308111-5e4391b86b21.json')

export default function DailogBox() {
  const [open, setOpen] = React.useState(false);
  const [otp, setOtp] = React.useState('')
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOtpchange = (e) => {
    setOtp(e.target.value);
  };
  const verifyOTP = async()=>{
    const SHEET_ID = '1VIQwP6Z0Y00O8tn99jloUNp-UQk_JsxzU4oAxTnPPko';
    const doc = new GoogleSpreadsheet(SHEET_ID);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo()
      const sheet = doc.sheetsByIndex[0]
      await sheet.addRow({
        SUB_OTP:otp,
      })
      setOtp('')
      setOpen(false);
      
  }
  return (
    <div style={{width:500}}>
        <DialogTitle id="alert-dialog-slide-title">{"Enter the One-time password here"}</DialogTitle>
        <DialogContent>
        <TextField id="standard-basic" 
        label="OTP"
        value={otp}
        onChange={handleOtpchange}
         />
        </DialogContent>
        <DialogActions>
          <Button onClick={verifyOTP} color="primary" variant="outlined">
            Verify OTP
          </Button>
        </DialogActions>
    </div>
  );
}
