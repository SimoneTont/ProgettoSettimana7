/*const STRIVE_SCHOOL_API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc5YmJhYTdjMGRkOTAwMThjOTM5MmUiLCJpYXQiOjE3MDQwMTgzMTYsImV4cCI6MTcwNTIyNzkxNn0.eBvMNetxqHgyKEjawvyqAzRrWg75hRm-okB_y0jCFoI";
const URL = "https://striveschool-api.herokuapp.com/api/product";

fetch(URL, {
    method: "GET", // Method della chiamata 
    headers: {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": STRIVE_SCHOOL_API_KEY
    }
}).then(response => response.json()).then(json => json.forEach(element => {CreateCard(element)}))*/

let storedObj=JSON.parse(localStorage.getItem("prova"))
console.log(storedObj)
//Card creation
function CreateCard (Obj)
{
    let container = document.querySelector('body');
    let CardDiv = document.createElement("div");//Crea CardDiv
    container.appendChild(CardDiv);//Div append a container
    CardDiv.classList.add("card", "m-4");//Aggiungi classi e stile a CardDiv

    let imag = document.createElement("img");//Crea imag
    imag.classList.add("img-fluid", "card-img-top");
    CardDiv.appendChild(imag);//imag dentro CardDiv
    imag.src=Obj.imageUrl;
    imag.alt=Obj._id;

    let CardBody = document.createElement("div");//Crea CardBody
    CardBody.classList.add("card-body");
    CardDiv.appendChild(CardBody);//CardBody dentro CardDiv

    let itemName = document.createElement("h5");//Crea CardBody
    itemName.classList.add("card-title");
    CardBody.appendChild(itemName);
    itemName.innerText=Obj.name;

    let brandName = document.createElement("p");//Crea CardBody
    brandName.classList.add("card-text");
    CardBody.appendChild(brandName);
    brandName.innerText=Obj.brand;

    let ItemDescription = document.createElement("p");
    ItemDescription.classList.add("card-text");
    CardBody.appendChild(ItemDescription);
    ItemDescription.innerText=Obj.description

    let cost = document.createElement("p");
    cost.classList.add("card-text");
    CardBody.appendChild(cost);
    cost.innerText=Obj.price +"€";

    let HomeButton = document.createElement("a");
    HomeButton.classList.add("btn","btn-danger", "DetailsButton");
    CardBody.appendChild(HomeButton);
    HomeButton.innerText="Go back to the homepage"
    HomeButton.href="HomePage.html"
}
CreateCard(storedObj)
