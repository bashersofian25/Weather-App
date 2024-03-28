export const asyncRequestData = async (city) => {
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4ae8e31e56884410823102146242603&q=${city}&days=14`);
        const result = await response.json();
        if(result.error !== undefined){
            throw new Error('bad request');
        }
        return result;
    }catch(err){
        alert("No results found, please try again");
        return null;
    }
};
