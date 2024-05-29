let list = [];
let cart = document.querySelector("ul");
const aside = document.querySelector("aside");
let jsonList;
let jsonValue;

function addToCart(price, name){
    let product = {
        price: price, 
        name: name
    }
    list.push(product)
    console.log (list);
    listAdd();
}
function listAdd(){
    cart.innerHTML = "";
    for (let index = 0; index < list.length; index++) {
        let listElement = document.createElement("li");
        listElement.innerText = list[index].name +": "+ list[index].price+"kr"
        cart.appendChild(listElement);
        
    }

    jsonList = JSON.stringify(list);
    window.localStorage.setItem("list", jsonList);
}
function loadStorage(){
    jsonValue= window.localStorage.getItem("list")
    if (jsonValue) {
        list = JSON.parse(jsonValue);
        listAdd();
    }

}

function displayCart(){
    
    if (aside.style.display != "block") {
        aside.style.display = "block";
    }
    else{
        aside.style.display = "none";
    }
}
function clearCart(){
    localStorage.clear();
    list = [];
    listAdd();
}
loadStorage();