
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
  }).then(response => response.json()).then(json => createCard(json))

//Chiamata DELETE
/*
fetch(URL +"/"+ItemID, {
method: "DELETE", // Method della chiamata 
headers: {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": STRIVE_SCHOOL_API_KEY
    }
});*/

function createCard (obj)
{
    console.log(obj)
}