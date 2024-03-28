const moment = require('moment'); // require 

import { createCard } from "../components/dayCard";
import { createFutureDayInfo } from "../dayInfo";

export const renderDays = (data) => {
    const days = document.getElementById('future-weather');
    if(data){
        console.log(data);
        days.replaceChildren();
        for(let i = 0; i<data.forecast.forecastday.length; i++){
            const forecast = data.forecast.forecastday[i].day;
            const day = moment(data.forecast.forecastday[i].date).format('LLLL').split(',')[0];

            const dayInfo = createFutureDayInfo(day, forecast.maxtemp_c, forecast.mintemp_c, forecast.condition);
            const card = createCard(dayInfo);
            days.append(card);
        }
    }
};  