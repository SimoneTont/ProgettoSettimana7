
/*endpoint principale https://striveschool-api.herokuapp.com/api/product/*/
console.log(window)

/*fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc5YmJhYTdjMGRkOTAwMThjOTM5MmUiLCJpYXQiOjE3MDI3MTk3ODgsImV4cCI6MTcwMzkyOTM4OH0.ZWtYNSOpd0TEkA8gz_dz_mub0Q2kY41puVZ3HYvvx6A"
}
})*/

const STRIVE_SCHOOL_API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc5YmJhYTdjMGRkOTAwMThjOTM5MmUiLCJpYXQiOjE3MDI3MTk3ODgsImV4cCI6MTcwMzkyOTM4OH0.ZWtYNSOpd0TEkA8gz_dz_mub0Q2kY41puVZ3HYvvx6A";
const URL = "https://striveschool-api.herokuapp.com/api/product";

class Item
{
    constructor(name, description, brand, imageUrl, price)
    {
        this.name = name;
        this.description = description;
        this.brand =brand;
        this.imageUrl =imageUrl;
        this.price =price;
    }
}
let SubmitButton = document.querySelector("#SubmitButton")

let F = document.querySelectorAll("#PrimoForm .form-group input")
//Compilazione form
SubmitButton.addEventListener('click', () => {
    if (F[0].value==="")
    {
        alert("Compila tutti i campi")
    } else if(F[1].value==="")
    {
        alert("Compila tutti i campi")
    }else if(F[2].value==="")
    {
        alert("Compila tutti i campi")
    }else if(F[3].value==="")
    {
        alert("Compila tutti i campi")
    }else if(F[4].value==="")
    {
        alert("Compila tutti i campi")
    }else
    {
        let obj= new Item (F[0].value, F[1].value, F[2].value, F[3].value, F[4].value)
        F[0].value =""
        F[1].value =""
        F[2].value =""
        F[3].value =""
        F[4].value =""
        console.log(obj)

        fetch(URL, {
            method: "POST", // Method della chiamata 
            body: JSON.stringify(obj), // nel body della richiesta invio il dato al server
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Authorization": STRIVE_SCHOOL_API_KEY
              }
          });
    }
})

// Chiamata di tipo POST
/* 
fetch(URL, {
  method: "POST", // Method della chiamata 
  body: JSON.stringify(obj), // nel body della richiesta invio il dato al server
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": STRIVE_SCHOOL_API_KEY
    }
});
*/

//Chiamata GET
fetch(URL, {
    method: "GET", // Method della chiamata 
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": STRIVE_SCHOOL_API_KEY
      }
  }).then(response => response.json()).then(json => json.forEach(element => { CreateCard(element)}))

//Chiamata DELETE
/*
fetch(URL +"/"+ItemID, {
method: "DELETE", // Method della chiamata 
headers: {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": STRIVE_SCHOOL_API_KEY
    }
});*/

function CreateCard (Obj)
{
    let container = document.querySelector('#CardsContainer');//Seleziona container

    let CardDiv = document.createElement("div");//Crea CardDiv
    container.appendChild(CardDiv);//Div append a container
    CardDiv.classList.add("card", "m-4");
    CardDiv.style.width= "18rem";//Aggiungi classi e stile a CardDiv

    let imag = document.createElement("img");//Crea imag
    imag.classList.add("img-fluid");
    CardDiv.appendChild(imag);//imag dentro CardDiv
    imag.src=Obj.imageUrl;

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

    let cost = document.createElement("p");
    cost.classList.add("card-text");
    CardBody.appendChild(cost);
    cost.innerText=Obj.price +"€";

    let deletionButton = document.createElement("button");
    deletionButton.classList.add("btn","btn-danger", "d-none");
    CardBody.appendChild(deletionButton);
    deletionButton.innerText="Delete from server"

    let editingButton = document.createElement("button");
    editingButton.classList.add("btn","btn-success", "d-none");
    CardBody.appendChild(editingButton);
    editingButton.innerText="Edit item"

    console.log(Obj)
}

let AOButton = document.querySelector("#AdvancedOptionsButton")

AOButton.addEventListener('click', () => {
    let advancedButtons=document.querySelectorAll(".card-body button")
    advancedButtons.forEach(element => {
        element.classList.remove("d-none")
    });
});