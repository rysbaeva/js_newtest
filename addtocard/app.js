let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Салат',
        company: 'ikea',
        image: '1.PNG',
        price: 250
    },
    {
        id: 2,
        name: 'крылышки',
        company: 'marcos',
        image: '2.PNG',
        price: 250
    },
    {
        id: 3,
        name: 'Рыба',
        company: 'marcos',
        image: '3.PNG',
        price: 350
    },
    {
        id: 4,
        name: 'Чичевичный суп',
        company: 'marcos',
        image: '4.PNG',
        price: 260
    },
    {
        id: 5,
        name: 'Салат',
        company: 'ikea',
        image: '5.PNG',
        price: 400
    },
    {
        id: 6,
        name: 'Пицца',
        company: 'marcos',
        image: '6.PNG',
        price: 500
    },
    {
        id: 5,
        name: 'Салат ассорти',
        company: 'ikea',
        image: '1.PNG',
        price: 400
    },
    {
        id: 5,
        name: 'Пицца пепперони',
        company: 'marcos',
        image: '6.PNG',
        price: 400
    },
    {
        id: 5,
        name: 'Салат свежий',
        company: 'ikea',
        image: '5.PNG',
        price: 400
    },
];


// Filter Buttons







let listCards  = [];
// function initApp(){
//     products.forEach((value, key) =>{
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Купить</button>`;
//         list.appendChild(newDiv);
//     })
// }
// initApp();



// поиск


let listSaerch= [ ...products]
const initApp = () =>{
    if (listSaerch.length < 1 ){
        list.innerHTML = `<h3> Товар не найден </h3>`;
        return;
    }
    list.innerHTML = listSaerch
    .map ((product, key) => {
        return  `<div class = "item">
        <img src="image/${product.image}">
        <div class ="title">${product.name} </div>
        <div class ="price">${product.price.toLocaleString()} </div>
        <button onclick= "addToCard(${key})"> Купить </button>
        </div>  `;
    })
    .join("");
};

initApp();

const form = document.querySelector (".input-form");
const searchInput = document.querySelector (".search-input");
form.addEventListener ("keyup", () => {
    const inputValue = searchInput.value;
    listSaerch = products.filter((product) => {
        return product.name.toLowerCase().includes(inputValue);
    });
    initApp();
});



function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

// рег

let imya = document.querySelector('.imya')
let login = document.querySelector('.login')
let pass = document.querySelector('.pass')
let pass2 = document.querySelector('.pass2')
let error = document.querySelectorAll('.error')
let errorl = document.querySelector('.errorl')
let errorp = document.querySelector('.errorp')
let button = document.querySelector('.reg')

let  reg = () =>{
    if(imya.value=='' || login.value == ''){
       error.forEach((item) => {
        item.innerHTML="Укажите логин!"
       })
    }
    else if (imya.value.length < 5 || login.value.length < 5){
        error.forEach((item) => {
            item.innerHTML=" От 5 до 25 символов!"
           })
        
    }

    if (pass.value == '' || pass2.value == ''   ){
        errorp.forEach((item) => {
            item.innerHTML=" pisi !"
           })
        
    }
    else
    {
        error.innerHTML=" "
    }
    
if(pass.value == pass2.value) {
    errorp.innerHTML=" "
} else {
    errorp.innerHTML ="пароль не совпадает"
}

}
button.addEventListener("click", reg)


// menu
let open = document.querySelector ('.open')
let menu = document.querySelector ('.menu')
let close = document.querySelector ('.close')

open.addEventListener ('click', () => {
    menu.classList.add ('active')
})

close.addEventListener ('click', () => {
    menu.classList.remove ('active')
})

let open1 = document.querySelector ('.open1')
let menu1 = document.querySelector ('.menu1')
let close1 = document.querySelector ('.close1')

open1.addEventListener ('click', () => {
    menu1.classList.add ('active')
})

close1.addEventListener ('click', () => {
    menu1.classList.remove ('active')
})


