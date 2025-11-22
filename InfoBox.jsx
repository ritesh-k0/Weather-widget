import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL ="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    const HOT_URL ="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL ="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL ="https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"; 

    


    return(
      <div className='cardContainer'>
        <div className="InfoBox">
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
          ?RAIN_URL
          :info.temp > 15
          ?HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.City}
        </Typography>
        <Typography variant="body2"sx={{ color: 'text.secondary' }}> 
          <p>Temprature={info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}</p>
          <p>Max Temp = {info.tempMax}</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like{info.feelslike}</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
  

        </div>

    ) 


}