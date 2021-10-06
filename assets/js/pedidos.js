const pictures = [
  "menu1@2x.png",
  "menu2@2x.png",
  "menu3@2x.png",
  "menu4@2x.png",
  "foto1@2x.png",
  "menu5@2x.png",
  "menu1@2x.png",
  "menu2@2x.png",
  "menu3@2x.png",
  "menu4@2x.png",
  "foto1@2x.png",
  "menu5@2x.png"
];
const title = 'Sit impedit deleniti cupiditate'
const description = 'Consectetur eos distinctio consequatur obcaecati laudantium expedita Laboriosam vero maiores aliquam voluptatem obcaecati officiis magnam? Quis saepe odio eligendi ea dolores Quos beatae quaerat at recusandae deleniti Error expedita tempora doloremque porro labore Quisquam aliquid amet tempore ipsum amet? Magni aliquid accusamus ullam officiis rerum odio totam molestias odio debitis'
const price = 25000

const div_items = document.getElementById('items');

const showItems = (wrapper, pictures, title, description, price) => {
  pictures.forEach(img => {
    let item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = `
      <img src="assets/img/${img}" width="300" alt="">
      <div class="info">
        <h2>${title}</h2>
        <p>${description}</p>
        <h2>${price}</h2>
      </div>
      <div class="add_item">
        <h3>CANTIDAD</h3>
        <div class="amount">
          <button class="less">-</button>
          <input type="number" value="1" id="amount_product" />
          <button class="plus">+</button>
        </div>
        <button class="add">AÑADIR AL CARRO</button>
      </div>
    `;
    wrapper.appendChild(item);
  });
};

showItems(div_items, pictures, title, description, price);

const btn_plus = document.getElementById('plus');
const btn_less = document.getElementById('less');
