var weatherData;
var humidity;
var temp;
var humidityStatus;
var tempStatus;
var totalStatus;
var actStatus;

function preload() {
    // p5 specific function to load JSON
    weatherData = loadJSON('https://api.openweathermap.org/data/2.5/forecast?id=5128581&units=imperial&APPID=417941f8eb6ef816314244950431636b');
}

function setup() {
    humidity = weatherData.list[0].main.humidity;
    temp = weatherData.list[0].main.temp;

    // set humidityStatus
    if (humidity >= 40 && humidity <= 60) {
        humidityStatus = 'green';
    } else if (humidity < 40 && humidity >= 30) {
        humidityStatus = 'yellow';
    } else if (humidity < 60 && humidity >= 70) {
        humidityStatus = 'yellow';
    } else if (humidity < 30) {
        humidityStatus = 'red';
    } else if (humidity > 70) {
        humidityStatus = 'red';
    }

    // set tempStatus
    if (temp >= 70 && temp <= 74) {
        tempStatus = 'green';
    } else if (temp < 70 && temp >= 68) {
        tempStatus = 'yellow';
    } else if (temp < 74 && temp >= 76) {
        tempStatus = 'yellow';
    } else if (temp < 68) {
        tempStatus = 'red';
    } else if (temp > 76) {
        tempStatus = 'red';
    }

    // tell mold what to do

    // look for food
    if (tempStatus == 'green' && humidityStatus == 'green') {
        $('.overlay #status').css("color", "green");
        $('.overlay #status').text("Look for food");
        $('.video2').show();

    }

    // reproduce
    else if (tempStatus == 'green' && humidityStatus == 'yellow') {
        $('.overlay #status').css("color", "yellow");
        $('.overlay #status').text("Reproduce");
        $('.video3').show();
    } else if (tempStatus == 'yellow' && humidityStatus == 'green') {
        $('.overlay #status').css("color", "yellow");
        $('.overlay #status').text("Reproduce");
        $('.video3').show();
    } else if (tempStatus == 'green' && humidityStatus == 'red') {
        $('.overlay #status').css("color", "yellow");
        $('.overlay #status').text("Reproduce");
        $('.video3').show();
    } else if (tempStatus == 'red' && humidityStatus == 'green') {
        $('.overlay #status').css("color", "yellow");
        $('.overlay #status').text("Reproduce");
        $('.video3').show();
    } else if (tempStatus == 'yellow' && humidityStatus == 'yellow') {
        $('.overlay #status').css("color", "yellow");
        $('.overlay #status').text("Reproduce");
        $('.video3').show();
    } else if (tempStatus == 'yellow' && humidityStatus == 'red') {
        $('.overlay #status').css("color", "yellow");
        $('.overlay #status').text("Reproduce");
        $('.video3').show();
    } else if (tempStatus == 'red' && humidityStatus == 'yellow') {
        $('.overlay #status').css("color", "yellow");
        $('.overlay #status').text("Reproduce");
        $('.video3').show();
    }

    // go to sleep
    else if (tempStatus == 'red' && humidityStatus == 'red') {
        $('.overlay #status').css("color", "red");
        $('.overlay #status').text("Go to sleep");
        $('.video1').show();
    }

    $('.overlay #humidity').css("color", humidityStatus);
    $('.overlay #humidity').text("Humidity is " + humidity);
    $('.overlay #temp').css("color", tempStatus);
    $('.overlay #temp').text("Temperature is " + temp + '°F');

}