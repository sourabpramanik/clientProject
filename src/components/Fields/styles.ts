import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) =>({
root:{
    marginTop:75,
    marginRight:10,
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft:10
},
formControl: {
    margin: theme.spacing(1),
    
    
},
margin: {
    margin: theme.spacing(1),
},
button:{
    position: "absolute",
    width: 110,
    height: 35,
    left: 560,
    top: 400,
    background: "#001F60",
    borderRadius: 34,
    color:'#ffffff'
}
}))
export default styles