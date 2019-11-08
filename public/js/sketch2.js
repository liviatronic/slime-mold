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
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("drawingCanvas");

    sleep = createVideo('resources/mold-sleep.mp4');
    hunt = createVideo('resources/mold-hunt.mp4');
    reproduce = createVideo('resources/mold-reproduce.mp4');

    humidity = weatherData.list[0].main.humidity;
    temp = weatherData.list[0].main.temp;

    background('black');
    textSize(32);
    fill('white');

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
        fill('green');
        hunt.loop();
        text("Look for food", width / 2, height / 2);
    }

    // reproduce
    else if (tempStatus == 'green' && humidityStatus == 'yellow') {
        fill('yellow');
        reproduce.loop();
        text("Reproduce", width / 2, height / 2);
    } else if (tempStatus == 'yellow' && humidityStatus == 'green') {
        fill('yellow');
        reproduce.loop();
        text("Reproduce", width / 2, height / 2);
    } else if (tempStatus == 'green' && humidityStatus == 'red') {
        fill('yellow');
        reproduce.loop();
        text("Reproduce", width / 2, height / 2);
    } else if (tempStatus == 'red' && humidityStatus == 'green') {
        fill('yellow');
        reproduce.loop();
        text("Reproduce", width / 2, height / 2);
    } else if (tempStatus == 'yellow' && humidityStatus == 'yellow') {
        fill('yellow');
        reproduce.loop();
        text("Reproduce", width / 2, height / 2);
    } else if (tempStatus == 'yellow' && humidityStatus == 'red') {
        fill('yellow');
        reproduce.loop();
        text("Reproduce", width / 2, height / 2);
    } else if (tempStatus == 'red' && humidityStatus == 'yellow') {
        fill('yellow');
        reproduce.loop();
        text("Reproduce", width / 2, height / 2);
    }

    // go to sleep
    else if (tempStatus == 'red' && humidityStatus == 'red') {
        fill('red');
        sleep.loop();
        text("Go to sleep", width / 2, height / 2);
    }

    fill(humidityStatus);
    text("Humidity is " + humidity, 50, 50);
    fill(tempStatus);
    text("Temperature is " + temp + '°F', 50, 90);
}

function draw() {

}


// function to resize the p5 canvas when the window is resized
// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }