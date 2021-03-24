import styles from './styles';
import flag from '../../assets/images/indianflag.svg'
import clogo from '../../assets/images/covid19logo.jpg'
import Fields from '../Fields/index'
export default function Register(){
    const classes = styles()
    return(
        <div className={classes.root}>
            <div className={classes.topBar}>
                <img src={flag} alt="flag" className={classes.flag}/>
                <div className={classes.head1}>
                Registered under Ministry of Corporate Affairs
                </div>
                <div className={classes.head2}>
                Helpline Number : +91 8269844998| email : synaptic.universal@gmail.com 
                </div>
            </div>
            <div >
                
              
                <img src={clogo} className={classes.clogo}/>
            </div>
            <div className={classes.rectangle2}>
                <div className={classes.detail}>
                Your Photo Id will be verified at the time 
                of your vaccination appointment. 
                Please provide the details of 
                the Photo Id 
                <div className={classes.detail2}>
                you will carry for vaccination.
                </div>
                </div>
                <Fields/>

            </div>
        </div>
    )
}