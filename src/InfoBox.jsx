import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({info}){
    let cold_img=
    "https://plus.unsplash.com/premium_photo-1670596833781-6b22e7979e53?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let hot_img=
    "https://images.unsplash.com/photo-1528306606980-c7b093f99f21?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rainy_img=
    "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    return(
      <div className="InfoBox">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={ info.humidity > 80 ? rainy_img : info.temp>15 ? hot_img : cold_img }
        title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp={info.tempMin}&deg;C</p>
         <p>Max Temp={info.tempMax}&deg;C</p>
         <p>The weather can be described as {info.weather} and feels Like={info.feels_like}&deg;C</p>
        
        </Typography>
        </CardContent>
        </Card>
      </div>
    );
}