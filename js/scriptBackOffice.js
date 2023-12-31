
/*endpoint principale https://striveschool-api.herokuapp.com/api/product/*/
console.log(window)

const STRIVE_SCHOOL_API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc5YmJhYTdjMGRkOTAwMThjOTM5MmUiLCJpYXQiOjE3MDQwMTgzMTYsImV4cCI6MTcwNTIyNzkxNn0.eBvMNetxqHgyKEjawvyqAzRrWg75hRm-okB_y0jCFoI";
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
    } else if(F[2].value==="")
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

//Form Reset
let FormReset = document.querySelector("#ResetFormButton")
FormReset.addEventListener('click', () => {
    F[0].value =""
    F[1].value =""
    F[2].value =""
    F[3].value =""
    F[4].value =""
})
        
let ShowButton = document.querySelector("#ShowButton")
let container = document.querySelector('#CardsContainer');
//console.log(container)
ShowButton.addEventListener('click', () => {
    container.innerHTML=""
    //Chiamata GET
    fetch(URL, {
        method: "GET", // Method della chiamata 
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": STRIVE_SCHOOL_API_KEY
        }
    }).then(response => response.json()).then(json => json.forEach(element => {CreateCard(element)}))
})


//Card creation
function CreateCard (Obj)
{
    let CardDiv = document.createElement("div");//Crea CardDiv
    container.appendChild(CardDiv);//Div append a container
    CardDiv.classList.add("card", "m-4");
    CardDiv.style.width= "18rem";
    //Aggiungi classi e stile a CardDiv

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

    let deletionButton = document.createElement("button");
    deletionButton.classList.add("btn","btn-danger", "d-none", "DeletionButton");
    CardBody.appendChild(deletionButton);
    deletionButton.innerText="Delete from server"

    let editingButton = document.createElement("button");
    editingButton.classList.add("btn","btn-success", "d-none", "EditButton");
    CardBody.appendChild(editingButton);
    editingButton.innerText="Edit item"

    //console.log(Obj)
}

//Advanced Options Button
let AOButton = document.querySelector("#AdvancedOptionsButton")

AOButton.addEventListener('click', () => {
    let advancedButtons=document.querySelectorAll(".card-body button")
    advancedButtons.forEach(element => {
        element.classList.remove("d-none")
    });

    let deletionButtons = document.querySelectorAll(".DeletionButton")
    deletionButtons.forEach(element => {
        element.addEventListener ('click', () => {DeleteItem(element)})
    });

    let editButtons = document.querySelectorAll(".EditButton")
    editButtons.forEach(element => {
        element.addEventListener ('click', () => {EditItem(element)})
    });
});

//Delete function
function DeleteItem(currentButton)
{
    let confirmation = confirm("Are you sure you want to proceed?");
    if(confirmation===true)
    {
        //Chiamata DELETE
    let CurrentCard=currentButton.parentElement.parentElement
    let CurrentID=CurrentCard.querySelector("img").alt
    //console.log(CurrentID)
    fetch(URL +"/"+CurrentID, {
    method: "DELETE", // Method della chiamata 
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": STRIVE_SCHOOL_API_KEY
        }
    });
    CurrentCard.remove()
    }
}

//Edit function

function EditItem(currentButton)
{
    let confirmation = confirm("Are you sure you want to proceed?");
    if(confirmation===true)
    {
        let obj= new Item (F[0].value, F[1].value, F[2].value, F[3].value, F[4].value)
    let SubmitEditButton = document.querySelector('#SubmitEdit')
    SubmitEditButton.classList.remove("d-none")
    SubmitEditButton.addEventListener ('click', () => {
        if (F[0].value==="")
    {
        alert("Compila tutti i campi")
    } else if(F[2].value==="")
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
    }})
    
    let CurrentID=currentButton.parentElement.parentElement.querySelector("img").alt
    //Chiamata PUT
    fetch(URL +"/"+CurrentID, {
    method: "PUT", // Method della chiamata 
    body: JSON.stringify(obj),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": STRIVE_SCHOOL_API_KEY
        }
    });
    }
}