import React from 'react'
import ReactApexChart from "react-apexcharts";
import axios from 'axios'

export default function Graph(){

    
    const [vaccineTrend, setVaccineTrend] = React.useState('')
    //const [date, setDate] = React.useState("")
    React.useEffect(() =>{
        const fetchData = async () => {
            try{
                const newData = await axios.get(
                    `https://coronavirus-19-api.herokuapp.com/countries/india/`
                );
                console.log(newData.data.cases)
                setVaccineTrend(newData.data.cases);
                
                
            }catch(e){
                console.log(e);
            }
        }
        fetchData();
    },[])
    

    return(
        <div>
            
        </div>
    )
}