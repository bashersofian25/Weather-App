export const createCurrentDayInfo = (day, temp, feelsLike, condition, location) => {
    
    return { day, temp, feelsLike, condition, location };
};

export const createFutureDayInfo = (day, maxTemp, minTemp, condition) => {
    return{ day, maxTemp, minTemp, condition };

};