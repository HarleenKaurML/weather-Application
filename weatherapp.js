// const apikey = "a9c554c5a0b182fe504d45e414b5d42a";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");

// async function checkWeather(city){
//     const response = await fetch(apiUrl + city + ` &appId=${apikey}`);
//     var data = await response.json();
//     console.log(data);
//     document.querySelector(".city").innerHTML=data.name;
//     document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C" ;
//     document.querySelector(".humidity").innerHTML=data.main.humidity + "%" ;
//     document.querySelector(".wind").innerHTML=data.wind.speed +  "km/hr";

// }
// searchBtn.addEventListener("click",()=>{
//     checkWeather(searchBox.value);
// });
// checkWeather(city);
const apikey = "a9c554c5a0b182fe504d45e414b5d42a";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
    const response = await fetch(apiUrl);
    if(response.ok) {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="./images/clouds.png"
        }
        else if (data.weather[0].main=="Clear"){
             weatherIcon.src="./images/clear.png"
        }
        else if (data.weather[0].main=="Rain"){
            weatherIcon.src="./images/rain.png"
       }
       else if (data.weather[0].main=="Drizzle"){
        weatherIcon.src="./images/drizzle.png"
   }
   else if (data.weather[0].main=="Mist"){
    weatherIcon.src="./images/mist.png"
}
    }
     else {
        alert("City not found!");
    }
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
