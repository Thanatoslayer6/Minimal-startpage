//Change the variables to your liking.
var ctrycode = "USD"; //country code for btc 
var country = "USA"; //country name
var city = "Oklahoma"; //city name for openweathermap

//https://coronavirus-19-api.herokuapp.com/countries/

//openweathermap you can use your own key or use mine...
var baseURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var key = "&APPID=15dac795069e9f6ef5b3c4c435136247";	
var apiurl = baseURL + city + "," + country + key;	
