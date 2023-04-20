       async function getWeatherData(){
        var cityNames=document.getElementById('cityNames').value;
        let weatherReport=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=25b4a4c69fc06034625222459dc10eef`)
        let res =await weatherReport.json()
        console.log(res);
    
    
        var weatherCard=document.getElementById('weatherCard');
        weatherCard.innerHTML=`<div class="card" style="width: 18rem;">
        <img src=" https://nordicapis.com/wp-content/uploads/5-Best-Free-and-Paid-Weather-APIs-2019-e1587582023501.png" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text"> Temperature:${res.main.temp}</p>
          
          <p class="card-text"> humidity:${res.main.humidity}</p>
          
        </div>
      </div>`
    }