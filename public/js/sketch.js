var weatherData;
var humidity;
var temp;
var humidityStatus;
var tempStatus;
var totalStatus;

function preload() {
    // p5 specific function to load JSON
    weatherData = loadJSON('https://api.openweathermap.org/data/2.5/forecast?id=5128581&APPID=417941f8eb6ef816314244950431636b');
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("drawingCanvas");

    background('black');
    textSize(32);
    fill('white');

    console.log(weatherData);
    humidity = weatherData.list[0].main.humidity;
    console.log(humidity);
    temp = weatherData.list[0].main.temp;
    console.log(temp);

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

    console.log(humidityStatus);

    fill(humidityStatus);
    text("Humidity is " + humidity, 50, 50);

    // set tempStatus
    if (temp >= 294.2 && temp <= 296.4) {
        tempStatus = 'green';
    } else if (temp < 294.2 && temp >= 291.4) {
        tempStatus = 'yellow';
    } else if (temp < 296.4 && temp >= 298.4) {
        tempStatus = 'yellow';
    } else if (temp < 291.4) {
        tempStatus = 'red';
    } else if (temp > 298.4) {
        tempStatus = 'red';
    }

    fill(tempStatus);
    text("Temperature is " + temp + ' kelvins', 50, 90);

    // tell mold what to do
    if (tempStatus == 'green' && humidityStatus == 'green') {
        fill('green');
        text("Look for food", width / 2, height / 2);
    } else if (tempStatus == 'yellow' && humidityStatus == 'yellow') {
        fill('yellow');
        text("Reproduce", width / 2, height / 2);
    } else if (tempStatus == 'red' && humidityStatus == 'red') {
        fill('red');
        text("Go to sleep", width / 2, height / 2);
    }
}

function draw() {

}


// function to resize the p5 canvas when the window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}