

export const asyncRequestData = async (city) => {
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4ae8e31e56884410823102146242603&q=${city}&days=3`);
        const result = await response.json();
        console.log(result);
    }catch(err){
        console.log(err);
        return null;
    }

};