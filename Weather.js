  const apikey = "52ffc0cec26ff35f463997da29d7f032";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchbox = document.querySelector(".search input");
        const searchbtn = document.querySelector(".search button");
        
        async function checkweather(city){
            const response = await fetch(apiurl + city + `&appid=${apikey}`);
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
                
            }else{
                document.querySelector(".error").style.display = "none";
                 var data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";     
            if(data.weather[0].main == "Clouds"){
                document.querySelector(".weather-icon").src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                document.querySelector(".weather-icon").src = "images/clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                document.querySelector(".weather-icon").src = "images/rain.png";
            }
            else if(data.weather[0].main == "Humidity"){
                document.querySelector(".weather-icon").src = "images/humidity.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                document.querySelector(".weather-icon").src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                document.querySelector(".weather-icon").src = "images/mist.png";
            }
            else if(data.weather[0].main == "Snow"){
                document.querySelector(".weather-icon").src = "images/snow.png";
            }
            else if(data.weather[0].main == "Wind"){
                document.querySelector(".weather-icon").src = "images/wind.png";
            }
            document.querySelector(".weather").style.display = "block";
        }
         }
           
        searchbtn.addEventListener('click' , ()=>{
            checkweather(searchbox.value);
        })
        
