let empArr = []
let items = document.getElementById("items")
fetch("https://fakestoreapi.com/products").then((dan) => dan.json()).then((res) => {
    console.log(res);
    res.forEach((element, index) => {
        empArr.push(element.image);
        let img = element.image
        let price = element.price
        let title = element.title
        let noOfItems = element.rating.count
        items.innerHTML += `
        <button id="items" class="btn g-col-6 g-col-md-4 text-dark">
        <img src="${img}">
        <div>
            <p>$${price}</p>
        </div>
        </button>
        
        `
    });
    // console.log(empArr);
})

let userName = document.getElementById("userName");


function signOut() {
    window.location.href = "index.html";
    localStorage.removeItem("currentUser");
}

let currentUser = JSON.parse(localStorage.getItem("currentUser"));

userName.innerHTML = currentUser.name;

if (!currentUser) {
    window.location.href = "index.html";
}