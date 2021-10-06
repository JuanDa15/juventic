const dishes = [
  {
    "id":32244,
    "nombre": "Plato 1",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu1@2x.png"
  },
  {
    "id":55562,
    "nombre": "Plato 2",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu2@2x.png"
  },
  {
    "id":656778,
    "nombre": "Plato 3",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu3@2x.png"
  },
  {
    "id":868779,
    "nombre": "Plato 4",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu4@2x.png"
  },
  {
    "id":7686799,
    "nombre": "Plato 5",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu5@2x.png"
  },
  {
    "id":86995809,
    "nombre": "Plato 6",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu1@2x.png"
  },
  {
    "id":392244,
    "nombre": "Plato 7",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu1@2x.png"
  },
  {
    "id":555062,
    "nombre": "Plato 8",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu2@2x.png"
  },
  {
    "id":6056778,
    "nombre": "Plato 9",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu3@2x.png"
  },
  {
    "id":8608779,
    "nombre": "Plato 10",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu4@2x.png"
  },
  {
    "id":76868799,
    "nombre": "Plato 11",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu5@2x.png"
  },
  {
    "id":869809,
    "nombre": "Plato 12",
    "descripcion":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio":20000,
    "img": "assets/img/menu1@2x.png"
  }
]

let displayedDishes = [];
let addBtns = [];
let subBtns = [];
let inputs = [];
let toCartBtns = [];
const nextPage = document.getElementById('next');
const previusPage = document.getElementById('previus');
const main = document.getElementById('menu-items');

nextPage.addEventListener('click', ()=>{
  createMenu();
})
// Events management and
// cart information manipulation
window.addEventListener('load',()=>{
  createMenu();
  // get HTML Elements
  // All the add btns
  addBtns = document.querySelectorAll('.addBtn');
  // All the sub btns
  subBtns = document.querySelectorAll('.subBtn');
  // All the input buttos
  inputs = document.querySelectorAll('.quantityInput');
  // All the add to cart buttons
  toCartBtns = document.querySelectorAll('.cart__btn');

   // Set the onload inputs values
  OnloadInputValues(inputs);

  // Dishes cuantity buttons manager
  addToCart(addBtns,inputs);
  removeFromCart(subBtns,inputs);
  //--------------------------------
  //-------------------------------- 

  // Save in cart button manager
  saveProductManager(toCartBtns);
})

// -------------------------------------------
// -------------------------------------------
// -------------------------------------------


function OnloadInputValues(inputs){
  // Set the onload inputs values
  if(productsExistence()){
    tempProducts = getProductsCache();

    tempProducts.forEach(product => {
      inputs.forEach(input => {
        if(input.getAttribute('id') === product.id){
          input.value = product.quantity;
        }
      })
    })
  }
}

function addToCart(addBtns,inputs){
  addBtns.forEach((addBtn,index) => {
    addBtn.addEventListener('click', ()=> {
      inputs[index].value = Number(inputs[index].value) + 1;
    });
  })
}

function removeFromCart(subBtns,inputs){
  subBtns.forEach((subBtn,index) => {
    subBtn.addEventListener('click', ()=> {
      inputs[index].value = Number(inputs[index].value) - 1;
    });
  })
}

function getIDfromArr(dishID){
  return dishes.findIndex(dish => dish.id == dishID);
}

function productsExistence(){
  return (localStorage.getItem('products'))?
                true:
                false
}

function productExistence(tempProducts,dishID){
  return tempProducts.find(product => product.id == dishID)?
            true:
            false;
}

function getProductsCache(){
  return (productsExistence())?
          JSON.parse(localStorage.getItem('products')):
          []
}

function delProductFromCart(btnDel,tempProducts,tempIndex,modal){
  btnDel.addEventListener('click',()=>{
    tempProducts.splice(tempIndex,1);
    localStorage.setItem('products',JSON.stringify(tempProducts));
    document.body.removeChild(modal);
  })
}

function closeModal(btn,modal){
  btn.addEventListener('click',()=>{
    document.body.removeChild(modal);
    location.reload();
  })
}

function getDish(dishID){
  return dishes.find(dish => dish.id == dishID);
}

function notification(message,icon){
  Swal.fire({
    title: 'Error!',
    text: message,
    icon: icon,
    confirmButtonText: ':(',
    timer: 2000
  })
}

function getIndexFrom(arr, field ,value){
  return arr.findIndex(product => product[field] == value)
}

function createMenu(){
  dishes.forEach((dish) => {
    let plate = createDish(dish);
    main.appendChild(plate);
  })
}

function createDish(dish){
  // Parent container
  const plate = document.createElement('div');
  plate.classList.add('plate');
  // dish img
  const img = document.createElement('img');
  img.classList.add('plate__image');
  img.setAttribute('src', `${ dish.img }`);
  img.setAttribute('alt',`${ dish.nombre }`);
  // dish description
  const description = document.createElement('div');
  description.classList.add('plate__description');
  description.innerHTML=`
    <h2 class='name'>${ dish.nombre }</h2>
    <p class='description'>${ dish.descripcion }</p>
    <p class='price'>$${ dish.precio }</p>
  `;
  // dish buttons panel
  const btns__container = document.createElement('div');
  btns__container.classList.add('buttons__container');

  btns__container.innerHTML = `
    <span>Cantidad</span>
    <div class="buttons__panel">
      <button type="button" class="subBtn">
        -
      </button>
      <input class="quantityInput" type="number" id="${ dish.id }" value="0">
      <button type="button" class="addBtn">
        +
      </button>
    </div>
    <button class="cart__btn" dishID="${ dish.id }">
        Añadir al carrito 
        <i class="fas fa-shopping-cart"></i>
    </button>
  `;

  // Plate creation
  plate.appendChild(img);
  plate.appendChild(description);
  plate.appendChild(btns__container);

  return plate;
}

function createModal(message, id1, id2){
  let modal = document.createElement('div');
  modal.classList.add('modal__container');

  modal.innerHTML = `
    <div class="modal">
      <p class="text-alert">${message}</p>
      <div class="modal_btns">
        <button id="${id1}">
          <i class="fas fa-check"></i>
        </button>
  
        <button id="${id2}">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  `;

  return modal;
}

function addProductToCart(btnSave,tempProducts,dishID,quantity,modal){
  btnSave.addEventListener('click',()=>{
    if(localStorage.getItem('products')){
      tempProducts = getProductsCache();
      if(productExistence(tempProducts,dishID)){
        let i = getIndexFrom(tempProducts,'id',dishID);
        tempProducts[i].quantity = quantity;
        localStorage.setItem('products',JSON.stringify(tempProducts));
      }else{
      tempProducts.push({
        id:dishID,
        quantity:quantity
      });
      localStorage.setItem('products',JSON.stringify(tempProducts));
    }
  }else{

    tempProducts.push({
      id: dishID,
      quantity: quantity
    });

    localStorage.setItem('products',JSON.stringify(tempProducts));
  }
  document.body.removeChild(modal);
})
}

function saveProductManager(toCartBtns){
  toCartBtns.forEach((cartBtn,index)=>{
    cartBtn.addEventListener('click', ()=>{
      // Arr to manage the products
      let tempProducts = [];
      // Get the id of the pressed dish button
      let dishID = cartBtn.getAttribute('dishID');
      // Get the quantity of the input
      let quantity = inputs[getIDfromArr(dishID)].value;


      if(productsExistence()){
        tempProducts = getProductsCache();

        if(quantity == 0 && productExistence(tempProducts,dishID)){
          let tempIndex = getIndexFrom(tempProducts,'id',dishID);
          // Modal delete confirm creation
          let message = `¿Quieres eliminar el producto <br>del carrito?`;
          let modal = createModal(message,'delItem','cancel');
          document.body.appendChild(modal);
          // -----------------------------
          // Modal delete confirm buttons management
          // Delete button
          const btnDel = document.getElementById('delItem');
          delProductFromCart(btnDel,tempProducts,tempIndex,modal)
          // Cancel Button
          const btnCancel = document.getElementById('cancel');
          closeModal(btnCancel,modal);
        }
      }

      if(quantity > 0 && 
        (getIndexFrom(tempProducts,'id',dishID) !== -1) && 
        (getIndexFrom(tempProducts,'quantity',quantity) !== -1)){
        // Alert when the product is in the cart
        let error = 'Ya agrego el producto al carrito';
        notification(error,'error');
      }else if(quantity > 0){
        let dish = getDish(dishID);
        let quantity = inputs[index].value;
        let message = `¿Estas seguro que deseas <br>agregar ${quantity} ${dish.nombre} al carrito?`;

        // Modal creation
        let modal = createModal(message,'save_cart','close_modal')
        document.body.appendChild(modal);

        const btnClose = document.getElementById('close_modal');
        closeModal(btnClose,modal);
        const btnSave = document.getElementById('save_cart');
        addProductToCart(btnSave,tempProducts,dishID,quantity,modal)

      }else if(quantity <= 0 && (tempProducts.findIndex(product => product.id == dishID) === -1)){
        let message = 'La cantidad debe ser mayor de 0';
        notification(message,'error');
      }
    })
  })
}
