
    fetch('https://corona.lmao.ninja/v2/countries/Bangladesh')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("country").innerHTML = data.country;
      document.getElementById("newly_infected").innerHTML = data.todayCases.toLocaleString();
      document.getElementById("cases").innerHTML = data.cases.toLocaleString();
      document.getElementById("new_deaths").innerHTML = data.todayDeaths.toLocaleString();
      document.getElementById("death").innerHTML = data.deaths.toLocaleString();
      document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
      document.getElementById("tests").innerHTML = data.tests.toLocaleString();
      document.getElementById("flag").src = data.countryInfo.flag;
    })
   