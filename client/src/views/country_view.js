var CountryView = function() {
    var button = document.getElementById('button');
    button.addEventListener('click',this.processCLick);
  }
  
  CountryView.prototype.render = function(data){
      console.log(data);
      var selection = document.getElementById('selection');
      data.forEach(function(country, index) {
        var option = document.createElement('option');
        option.text = country.name;
        option.value = index;
        selection.appendChild(option);
      })
  }

  CountryView.prototype.processCLick = function(){
    var countrySelected = document.getElementById('selection');
    var selectedValue = countrySelected.options[countrySelected.selectedIndex].text;
    var ul = document.getElementById("bucket-list-countries");
    var li = document.createElement("li")
    li.innerText = selectedValue;
    ul.appendChild(li)

    
  }
    
  module.exports = CountryView;
