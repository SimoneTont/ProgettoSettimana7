const STRIVE_SCHOOL_API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc5YmJhYTdjMGRkOTAwMThjOTM5MmUiLCJpYXQiOjE3MDI3MTk3ODgsImV4cCI6MTcwMzkyOTM4OH0.ZWtYNSOpd0TEkA8gz_dz_mub0Q2kY41puVZ3HYvvx6A";
const URL = "https://striveschool-api.herokuapp.com/api/product";

fetch(URL, {
    method: "GET", // Method della chiamata 
    headers: {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": STRIVE_SCHOOL_API_KEY
    }
}).then(response => response.json()).then(json => json.forEach(element => {CreateCard(element)}))

//Card creation
function CreateCard (Obj)
{
    let container = document.querySelector('#CardsContainer');
    let CardDiv = document.createElement("div");//Crea CardDiv
    container.appendChild(CardDiv);//Div append a container
    CardDiv.classList.add("card", "m-4");
    CardDiv.style.width= "18rem";//Aggiungi classi e stile a CardDiv

    let imag = document.createElement("img");//Crea imag
    imag.classList.add("img-fluid");
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

    let deletionButton = document.createElement("button");
    deletionButton.classList.add("btn","btn-danger", "d-none", "DeletionButton");
    CardBody.appendChild(deletionButton);
    deletionButton.innerText="Delete from server"

    let editingButton = document.createElement("button");
    editingButton.classList.add("btn","btn-success", "d-none", "EditButton");
    CardBody.appendChild(editingButton);
    editingButton.innerText="Edit item"

    console.log(Obj)
}