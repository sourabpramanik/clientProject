import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DailogBox() {
  const [open, setOpen] = React.useState(false);
  const [otp, setOtp] = React.useState('')
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleOtpchange = (e) => {
    setOtp(e.target.value);
  };
  const verifyOTP = ()=>{
    
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
