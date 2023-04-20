fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=> {
      console.log(data);

      data.forEach(element => {
     const countryRequired = {
        ...element, 
        name: element.name.common,
        flag : element.flags.png,
        population: element.population,
        region : element.region,
        capital : element.capital
     }

      createCountry(countryRequired)
     });

})
.catch((err)=>console.log(err));

function createCountry({name, flag, population, region, capital}) {
    document.body.innerHTML += `
     <div class = "container">
      <img src= "${flag}" alt="${name}" class="flag" />
      <div class= "info">
       <h2>${name}</h2>
       <p><span>Population : </span>${population}</p>
       <p><span>Region : </span>${region}</p>
       <p><span>Capital : </span>${capital}</p>
       <button onClick="weather">
        Click to Weather
       </button>
      </div>
     </div>
       `    }
       fetch("https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=25b4a4c69fc06034625222459dc10eef")
.then((response)=>response.json())
.then((data)=> {
      console.log(data);

      data.forEach(element => {
         const weatherRequired = {
            ...element, 
            temperature:res.main.temp,
            
         }
    
          weather(weatherRequired)
      
     })
   })

     
.catch((err)=>console.log(err));

function weather({temperature}) {
    document.body.innerHTML += `
     <div class = "container">
      
       <p><span>: </span>${temperature}</p>
      
             </div>
     </div>
       `    }
       



       
