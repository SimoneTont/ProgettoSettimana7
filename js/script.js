
/*endpoint principale https://striveschool-api.herokuapp.com/api/product/*/
console.log(window)

/*fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc5YmJhYTdjMGRkOTAwMThjOTM5MmUiLCJpYXQiOjE3MDI3MTk3ODgsImV4cCI6MTcwMzkyOTM4OH0.ZWtYNSOpd0TEkA8gz_dz_mub0Q2kY41puVZ3HYvvx6A"
}
})*/

const STRIVE_SCHOOL_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc5YmJhYTdjMGRkOTAwMThjOTM5MmUiLCJpYXQiOjE3MDI3MTk3ODgsImV4cCI6MTcwMzkyOTM4OH0.ZWtYNSOpd0TEkA8gz_dz_mub0Q2kY41puVZ3HYvvx6A";
const URL = "https://striveschool-api.herokuapp.com/api/product";

class Item
{
    constructor(name, description, brand, imageUrl, price, _id, userId, createdAt, updatedAt, __v)
    {
        this.name = name;
        this.description = description;
        this.brand =brand;
        this.imageUrl =imageUrl;
        this.price =price;
    }
}

let obj= new Item ('k', 'v', 'c', 'https://i.ebayimg.com/images/g/-z8AAOSwAtphXY8W/s-l1600.jpg', 60)

console.log(obj)

fetch(URL, {
  // Chiamata di tipo POST
  method: "POST", // Method della chiamata - Salvataggio di una risorsa
  //body: JSON.stringify(obj), // nel body della richiesta invio il dato al server
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": "Bearer " + STRIVE_SCHOOL_API_KEY
    }
});

document.addEventListener("DOMContentLoaded", () => 
{
    let xhr = new XMLHttpRequest ();
    xhr.open('GET', URL)
    xhr.send();

    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState ===4 && xhr.status === 200)
        {
            let oggetti = JSON.parse(xhr.responseText);
            console.log(oggetti[0])
        }
        
    }
});