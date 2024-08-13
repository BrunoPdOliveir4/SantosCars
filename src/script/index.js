async function getData(){
    return fetch("http://localhost:8085/infos")
        .then(response => response.json())
        .then(data => data)
        .catch(err => {
            console.log("Error: "+err);
        });
}

    const infoContainer = document.getElementById("data-container");
let cars = [];
let carIndex = 0;


function createCard(carModel){
    infoContainer.innerHTML = `
    <img src="http://localhost:8085/img/${carModel.brand}" />
    <div> Modelo: ${carModel.model} </div>
    <div> Brand: ${carModel.brand} </div>
    <div> Preço: ${carModel.price} </div>
    <div> KMs: ${carModel.distance} </div>
    `
}

function showNextCar(){
    if(carIndex == cars.length){
        carIndex = 0;
    }else{
        carIndex++;
    } 
    createCard(cars[carIndex])
}

function showPreviousCar(){
    if(carIndex == 0){
        carIndex = cars.length - 1;
    }else{
        carIndex--;
    }
    createCard(cars[carIndex])
}

function search(value){
    results = []
    cars.forEach(car => {
        const carModel = car.model;
        const carBrand = car.brand;
        if(carModel.includes(value) ||
            carBrand.includes(value)){
                results.push(car);
            }
    })
    console.log(results);
}


async function main(){
    const infos = await getData();
    cars = infos.values;
    createCard(cars[carIndex])

    let button1 = document.getElementById("increment"); 
    button1.addEventListener("click", showNextCar);
    let button2 = document.getElementById("decrement");
    button2.addEventListener("click", showPreviousCar);

    let searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("input", (event) => {
        search(event.target.value)
    })
    //let carIndex.addEventListener("on")
}
main();


console.log("Hello World");