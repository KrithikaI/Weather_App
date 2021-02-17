class Fetch{
    async getCurrent(input){
        const key = "7f057a064f2c1cdce6ecee93e80d6ace";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`);

        const data = await response.json();
        console.log(data);

        return data;
    }
}