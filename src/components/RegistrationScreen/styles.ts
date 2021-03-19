import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) =>({
root:{
    backgroundColor:"black"
},
topBar:{
    position: "absolute",
    width: "100%",
    height: 54,
    left: 0,
    top: 0,
    background: "#001F60",
    },
flag:{
    position: "absolute",
    width: 38,
    height: 25,
    left: 194,
    top: 15,
},
head1:{
    position: "absolute",
    color:"white",
    width:"fit-content",
    height: 25,
    left:240,
    top: 17,
},
head2:{
    position: "absolute",
    width: "fit-content",
    height: 40,
    left: 1300,
    top: 15,
    fontFamily: "Montserrat",
    color: "white",

},
rectangle1:{
    position: "absolute",
    width: 1440,
    height: 878,
    left: 0,
    top: 146,
    background: "#F6F6F6",
},
head3:{
    position: "absolute",
    width: "fit-content",
    height: 32,
    left: 316,
    top: -110,
    
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 18,

    /* or 90% */

    color: "#002060"
},
rectangle2:{
    position: "absolute",
    width: 843,
    height: 512,
    left: 450,
    top: 175,

    background: "#FFFFFF",
    boxShadow: "5px 5px 5px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: 9,
},
detail:{
    position: "absolute",
    width: "fit-content",
    height: 43,
    left: 5,
    top: -105,

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 18,

/* or 129% */

color: "#333333",
},
detail2:{
    position: "absolute",
    width: "fit-content",
    height: 43,
    left: 3,
    top: 14,

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 18,

/* or 129% */

color: "#333333",
},
section:{
    position: "absolute",
    flexDirection:"row",
},


clogo:{
    position: "absolute",
    width: "auto",
    height: 50,
    left: 414,
    top: 82,

},
label:{
    position: "absolute",
    width: 229,
    height: 33,
    left: 5,
    top: 303,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 18,

    /* or 112% */

    color: "#928585",
}

}))
export default styles;