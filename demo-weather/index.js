#!/usr/bin/env node
const axios=require('axios')
let data={}
if(process.argv[2]){
  data.params={
    city:process.argv[2]
  }
}
axios.get('http://api.jirengu.com/weather.php',data)
  .then(function(res){

    let weather=res.data.results[0].weather_data[0]
    console.log('天气：'+weather.weather);
    console.log('气温：'+weather.temperature);
    console.log('风向：'+weather.wind);
    console.log('pm2.5：'+res.data.results[0].pm25);
  })
