export const createCurrentDayInfo = (day, temp, feelsLike, condition) => {
    
    return { day, temp, feelsLike, condition };
};

export const createFutureDayInfo = (day, maxTemp, minTemp, condition) => {
    return{ day, maxTemp, minTemp, condition };

};