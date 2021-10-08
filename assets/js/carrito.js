const dishes = [
  {
    "id": 32244,
    "nombre": "Plato 1",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio": 20000,
    "img": "assets/img/menu1@2x.png"
  },
  {
    "id": 55562,
    "nombre": "Plato 2",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio": 20000,
    "img": "assets/img/menu2@2x.png"
  },
  {
    "id": 656778,
    "nombre": "Plato 3",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio": 20000,
    "img": "assets/img/menu3@2x.png"
  },
  {
    "id": 868779,
    "nombre": "Plato 4",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio": 20000,
    "img": "assets/img/menu4@2x.png"
  },
  {
    "id": 7686799,
    "nombre": "Plato 5",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio": 20000,
    "img": "assets/img/menu5@2x.png"
  },
  {
    "id": 86995809,
    "nombre": "Plato 6",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio": 20000,
    "img": "assets/img/menu1@2x.png"
  },
  {
    "id": 392244,
    "nombre": "Plato 7",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio": 20000,
    "img": "assets/img/menu1@2x.png"
  },
  {
    "id": 555062,
    "nombre": "Plato 8",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio": 20000,
    "img": "assets/img/menu2@2x.png"
  },
  {
    "id": 6056778,
    "nombre": "Plato 9",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio": 20000,
    "img": "assets/img/menu3@2x.png"
  },
  {
    "id": 8608779,
    "nombre": "Plato 10",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio": 20000,
    "img": "assets/img/menu4@2x.png"
  },
  {
    "id": 76868799,
    "nombre": "Plato 11",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio": 20000,
    "img": "assets/img/menu5@2x.png"
  },
  {
    "id": 869809,
    "nombre": "Plato 12",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus porro quas reiciendis, molestias sunt excepturi dolore autem deleniti cum officiis dolorem quis similique earum, accusamus nihil aliquid esse incidunt dolores nostrum. Molestias a labore illum, id pariatur reprehenderit quo ipsam?",
    "precio": 20000,
    "img": "assets/img/menu1@2x.png"
  }
]

let itemsCarrito = JSON.parse(localStorage.getItem('products'));
const div_items = document.getElementById('items');
const title_total_pagar = document.getElementById('total_price');

// Total a pagar
const totalAPagar = (storage_products, array_products) => {
  let total = 0;
  storage_products.forEach(item => {
    array_products.forEach(plate => {
      if (item.id == plate.id) {
        total += item.quantity * plate.precio;
      }
    });
  });
  return total;
};

title_total_pagar.innerHTML = `$${totalAPagar(itemsCarrito, dishes)}`;
// Total a pagar

const showItems = (plates, items_array, wrapper) => {

  if (items_array.length === 0) {

    let item = document.createElement('h2');
    item.classList.add('no_items');
    item.innerHTML = `No tienes ningún elemento en el carrito`;
    wrapper.appendChild(item);

  } else {

    items_array.forEach(item => {
      plates.forEach(plato => {
        if (item.id == plato.id) {
          let new_div = document.createElement('div');
          new_div.classList.add('plateItem');
          new_div.innerHTML = `
            <img src="${plato.img}" width="250" alt="">
            <h3 class="title_name">${plato.nombre}</h3>
            <h3>$${plato.precio}</h3>
            <button class="borrar">borrar</button>
            <button class="editar">editar</button>
            <p>${plato.descripcion}</p>
            <button class="less">-</button>
            <input type="number" class="quantity" value="${item.quantity}" />
            <button class="plus">+</button>
          `;
          wrapper.appendChild(new_div);
        }
      });
    });

  }

};

showItems(dishes, itemsCarrito, div_items);

// Items
plusBtns = document.querySelectorAll('.plus');
lessBtns = document.querySelectorAll('.less');
inputs = document.querySelectorAll('.quantity');
// Items

plusBtns.forEach((plusBtn, index) => {
  plusBtn.addEventListener('click', () => {
    inputs[index].value = Number(inputs[index].value) + 1;
  });
});

lessBtns.forEach((lessBtn, index) => {
  lessBtn.addEventListener('click', () => {
    inputs[index].value = Number(inputs[index].value) - 1;
  });
});

// Borrar item
const delBtns = document.querySelectorAll('.borrar');
const titles_plates = document.querySelectorAll('.title_name');
const divs_plates = document.querySelectorAll('.plateItem');

delBtns.forEach((delBtn, index) => {
  delBtn.addEventListener('click', () => {
    delItem(titles_plates[index].innerHTML, itemsCarrito, titles_plates, divs_plates);
  });
});

const delItem = (nombre_plato, items_array, plates, divs) => {
  plates.forEach((title, index) => {
    if (title.innerHTML === nombre_plato) {
      divs[index].remove();
      items_array.splice(index, 1);
      localStorage.setItem('products', JSON.stringify(items_array));
      title_total_pagar.innerHTML = `$${totalAPagar(itemsCarrito, dishes)}`;
      if (items_array.length === 0) {
        showItems(dishes, itemsCarrito, div_items);
      }
    }
  });
};
// Borrar item

// Editar item
const editBtns = document.querySelectorAll('.editar');

editBtns.forEach((editBtn, index) => {
  editBtn.addEventListener('click', () => {
    editItem(inputs[index].value, index, itemsCarrito, dishes);
  });
});

const editItem = (new_amount, index, store_products, array_products) => {
  store_products[index].quantity = new_amount;
  localStorage.setItem('products', JSON.stringify(store_products));
  title_total_pagar.innerHTML = `$${totalAPagar(itemsCarrito, dishes)}`;
};
// Editar item
