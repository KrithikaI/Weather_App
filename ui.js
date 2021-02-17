class UI{
    constructor(){
        this.uicard = document.getElementById("content");
        this.city;
    }

    sendData(data){
        this.uicard.innerHTML = 
        
        `<div class="row-content">
            <div class="col s12 m4"></div>
            <div class="col s12 m4">
                <div clas="card darken-1">
                    <div class="card-content black-text">
                        <span class="card-title purple lighten-2 white-text"><b>${data.name}</b></span>
                        <p>Max Temp: ${(data.main.temp_max-273.15).toFixed(2)}°C <br>Min Temp: ${(data.main.temp_min-273.15).toFixed(2)}°C<br> Weather: ${data.weather[0].description}</p>
                    </div>
                </div>
            </div>
            <div class="col s12 m4></div>
        </div>;
        `
    }
}