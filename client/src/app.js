var AjaxRequest = require('./services/ajax_request.js');
var CountryView = require('./views/country_view.js');

var app = function(){
    var countryData = new AjaxRequest('https://restcountries.eu/rest/v2');
    var countryView = new CountryView(countryData);
    countryData.get(countryView.render);
    localStorage.setItem("myCountries", JSON.stringify(countryData));
}


window.addEventListener('load',app);