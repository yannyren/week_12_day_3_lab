var AjaxRequest = require('../services/ajax_request.js');

var CountryView = function() {
    var self = this
    var button = document.getElementById('button');
    button.addEventListener('click',this.processCLick.bind(self));
    this.data = []
  }
  
  CountryView.prototype.render = function(data){
      console.log(data);
      this.data = data;
      var selection = document.getElementById('selection');
      data.forEach(function(country, index) {
        var option = document.createElement('option');
        option.text = country.name;
        option.value = index;
        selection.appendChild(option);
      })
  }

  CountryView.prototype.processCLick = function(){
    var countryDropdown = document.getElementById('selection');
    // var selectedValue = countrySelected.options[countrySelected.selectedIndex].text;
    
    countryDropdown.value // this is a number (index)
    console.log(this)
    var ul = document.getElementById("bucket-list-countries");
    var li = document.createElement("li")
    console.log(this.data);
    li.innerText = this.data[countryDropdown.value].name;

    ul.appendChild(li);

    var ajax = new AjaxRequest("https://localhost:3000/api/countries")
    ajax.post(function () { alert('post complete') }, this.data[countryDropdown.value])
  }
    
  module.exports = CountryView;
