


const moment = require('moment'); // require 
import { createCurrentDayInfo } from "../dayInfo";


const buildCurrentDay = (dayInfo) => {
    const card = document.createElement('div');
    card.classList.add('big-card');

    const location = document.createElement('h1');
    location.innerText = `${dayInfo.location}`

    const day = document.createElement('h3');
    day.innerText = `${dayInfo.day}`;

    const condition = document.createElement('p');
    condition.innerText = `${dayInfo.condition.text}`;

    const icon = document.createElement('img');
    icon.classList.add('card-icon')
    icon.src = dayInfo.condition.icon;

    const feelsLike = document.createElement('div');
    feelsLike.classList.add('temp-current')
    const label = document.createElement('p');
    label.innerText = "Feels Like:";
    const tempFeel = document.createElement('div');
    tempFeel.classList.add('center-temp');
    tempFeel.innerText = `${dayInfo.feelsLike}°`;

    const tempBox = document.createElement('div');
    tempBox.classList.add('temp-current')
    const tempLabel = document.createElement('p');
    tempLabel.innerText = "Temperature:";
    

    const temp = document.createElement('div');
    temp.classList.add('center-temp');
    temp.innerText = `${dayInfo.temp}°`;

    feelsLike.append(label);
    feelsLike.append(tempFeel);

    tempBox.append(tempLabel);
    tempBox.append(temp);

    card.append(location);
    card.append(day);
    card.append(condition);
    card.append(icon);
    card.append(tempBox);
    card.append(feelsLike);
    

    return card;

};

export const renderToday= (data) => {
    const today = document.getElementById('current-weather');
    if(data){
        today.replaceChildren();
        const forecast = data.current;
        const date = moment().format('LLLL').split(',');
        console.log(forecast);
        const dayInfo = createCurrentDayInfo(`${date[0]}, ${date[1]}`, forecast.temp_c, forecast.feelslike_c, forecast.condition, `${data.location.name}, ${data.location.country}`);
        const card = buildCurrentDay(dayInfo);
        today.append(card);
    }
};  