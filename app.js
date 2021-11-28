/*const lookupBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
//lookupBtn.addEventListener("click", ()=>{
//axios.get("https://ipapi.co/json/").then(response) => {
    //ipDisplay.textcontent =`Ip: ${response.data.ip}`;
    

//});
lookupBtn.addEventListener("click",function(){
	axios.get("https://ipapi.co/json/").then(response=>{
       // console.log(response);
       ipDisplay.textcontent =`Ip: ${response.data.ip}`;
    locationDisplay.textcontent = `Location:${response.data.city},${response.data.region}
    ,${response.data.country_name}`;
});
});*/
var lookupBtn = document.querySelector(".lookup-btn");
var ipDisplay = document.querySelector(".ip-display");
var locationDisplay = document.querySelector(".location-display");
var Geolocation = document.querySelector(".Geo-location")
//lookupBtn.addEventListener("click", ()=>{
//axios.get("https://ipapi.co/json/").then(response) => {
//ipDisplay.textcontent =`Ip: ${response.data.ip}`;


//});
lookupBtn.addEventListener("click", function() {
    axios.get("https://ipapi.co/json/").then(response => {
        // console.log(response);
        ipDisplay.innerHTML = `Ip: ${response.data.ip}`;
        locationDisplay.innerHTML = `Location:${response.data.city},${response.data.region}
    ,${response.data.country_name} ,${response.data.longitude}`;
    });
});
