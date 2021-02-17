const ft = new Fetch();
const ui = new UI();

const search = document.getElementById('search');
const but = document.getElementById('submit');

but.addEventListener("click", () =>{
    const curr = search.value;

    ft.getCurrent(curr).then((data) =>{
        ui.sendData(data);
        search.value = null;
    });
});