import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) =>({
root:{
    marginTop:45,
    marginRight:10,
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft:10
},
formControl: {
    margin: theme.spacing(1),
},
textField:{
    justifyItems:"space-around",
    margin:10,
   

},
label:{
    margin:10,
    fontSize:15
},
rectangle2:{
    position: "absolute",
    width: 843,
    height: "fit-content",
    left:-1,
    paddingBottom: 20,
    top: 685,

    background: "#FFFFFF",
    boxShadow: "5px 5px 5px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: 9,
},
margin: {
    margin: theme.spacing(1),
},
button:{
    
    background: "#001F60",
    borderRadius: 34,
    
},
phoneInput:{
    maxWidth:315
},
radio:{
    margin:10,
    flexDirection:'row'
}

}))
export default styles